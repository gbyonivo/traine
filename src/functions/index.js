import dateFns from 'date-fns';
import { HALTED, MOVING, NOT_STARTED } from '../constants/positionTypes';

export const extractTime = (date, format) => dateFns.format(date || new Date(), format || 'HH:mm');

export const getMilliSecondsLeftToTheNextMinute = seconds => 1000 * (60 - parseInt(seconds, 10));

export const getRealTime = ({ realTime }) => realTime ? extractTime(realTime.realTimeServiceInfo.realTime) : '';

export const getScheduledTime = ({ scheduled }) => scheduled ? extractTime(scheduled.scheduledTime) : '';

export const getActualTime = arrivalOrDeperature => arrivalOrDeperature.realTime
  ? getRealTime(arrivalOrDeperature)
  : getScheduledTime(arrivalOrDeperature);

export const getScheduledTimeOrElseRealTime = arrivalOrDeperature => arrivalOrDeperature.scheduled
  ? getScheduledTime(arrivalOrDeperature)
  : getRealTime(arrivalOrDeperature);

export const getMessage = (departure, arrival, currentDateTime) => {
  const currentTime = extractTime(currentDateTime);
  const actualArrivalTime = getActualTime(arrival);
  if (currentTime < actualArrivalTime) {
    const scheduledArrivalTime = getScheduledTime(arrival);
    const realArrivalTime = getRealTime(arrival);
    if (scheduledArrivalTime === realArrivalTime) {
      return 'On Time';
    }
    return `Exp ${realArrivalTime}`;
  }
  const actualDepartureTime = getActualTime(departure);
  const scheduledDepartureTime = getScheduledTime(departure);
  const realDepartureTime = getRealTime(departure);
  if (scheduledDepartureTime === realDepartureTime) {
    return 'On Time';
  }
  return `Dept. ${actualDepartureTime}`;
};

export const shouldStartTime = (lastJourney, currentTime) => currentTime <= getActualTime(lastJourney.arrival);

export const getStationAndPosition = (stops, currentTime) => { // to be refactored... tdd!
  let stationAndPosition = {};
  stops.some((stop, index) => {
    const stopDepartureTime = getActualTime(stop.departure);
    const stopArrivalTime = getActualTime(stop.arrival);
    if (index === 0 && currentTime < stopDepartureTime) {
      stationAndPosition = {
        station: stop.location.crs,
        positionType: NOT_STARTED,
        assignedId: index
      };
      return true;
    }
    if (!stops[index + 1]) {
      stationAndPosition = {
        station: currentTime >= stopArrivalTime ? stop.location.crs : stops[index - 1].location.crs,
        positionType: currentTime >= stopArrivalTime ? HALTED : MOVING,
        assignedId: currentTime >= stopArrivalTime ? index : index - 1
      };
      return true;
    }
    const nextStopDepartureTime = getActualTime(stops[index + 1].departure);
    const nextStopArrivalTime = getActualTime(stops[index + 1].arrival);
    if (currentTime === nextStopArrivalTime) {
      stationAndPosition = {
        station: stops[index + 1].location.crs,
        positionType: HALTED,
        assignedId: index + 1
      };
      return true;
    }
    if (currentTime >= stopDepartureTime && currentTime < nextStopDepartureTime) {
      stationAndPosition = {
        station: stop.location.crs,
        positionType: MOVING,
        assignedId: index
      };
      return true;
    }
    return false;
  });

  return stationAndPosition;
};

export const getJourneyStatus = (scheduledInfo, realTimeUpdatesInfo) => {
  if (realTimeUpdatesInfo) {
    if (realTimeUpdatesInfo.delayReason) {
      return {
        message: 'Delayed',
        className: 'delayed'
      };
    }
    if (realTimeUpdatesInfo.realTimeServiceInfo
      && scheduledInfo
      && scheduledInfo.scheduledTime === realTimeUpdatesInfo.realTimeServiceInfo.realTime) {
      return {
        message: 'On Time',
        className: 'onTime'
      };
    }
    if (realTimeUpdatesInfo.realTimeServiceInfo) {
      return {
        message: `Exp ${extractTime(realTimeUpdatesInfo.realTimeServiceInfo.realTime)}`,
        className: 'exp'
      };
    }
  }
  return {
    message: 'On Time',
    className: 'onTime'
  };
};