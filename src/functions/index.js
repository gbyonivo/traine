import dateFns from 'date-fns';
import { HALTED, MOVING, NOT_STARTED } from '../constants/positionTypes';

const extractMessage = (arrivalOrDeperature, text) => arrivalOrDeperature.realTime //eslint-disable-line
  ? arrivalOrDeperature.scheduled.scheduledTime === arrivalOrDeperature.realTime.realTimeServiceInfo.realTime
    ? 'On Time'
    : `${text} ${arrivalOrDeperature.realTime.realTimeServiceInfo.realTime || arrivalOrDeperature.scheduled.scheduledTime}`
  : `${text} ${arrivalOrDeperature.scheduled.scheduledTime}`;

export const getTrainStatusMessage = (arrival, departure) => arrival.notApplicable
  ? extractMessage(departure, 'Dept.')
  : extractMessage(arrival, 'Exp.');

export const extractTime = date => dateFns.format(date, 'HH:mm');

export const getActualTime = (arrivalOrDeperature) => {
  if (arrivalOrDeperature.realTime) {
    return extractTime(arrivalOrDeperature.realTime.realTimeServiceInfo.realTime);
  }
  if (arrivalOrDeperature.scheduled) {
    return extractTime(arrivalOrDeperature.scheduled.scheduledTime);
  }
  return '';
};

export const shouldStartTime = (lastJourney, currentTime) => currentTime <= getActualTime(lastJourney.arrival);

export const getStationAndPosition = (stops, currentTime) => {
  let stationAndPosition = {};
  stops.some((stop, index) => {
    const stopDepartureTime = getActualTime(stop.departure);
    const stopArrivalTime = getActualTime(stop.arrival);
    if (index === 0 && currentTime < stopDepartureTime) {
      stationAndPosition = {
        station: stop.location.crs,
        positionType: NOT_STARTED
      };
      return true;
    }
    if (!stops[index + 1]) {
      stationAndPosition = {
        station: currentTime >= stopArrivalTime ? stop.location.crs : stops[index - 1].location.crs,
        positionType: currentTime >= stopArrivalTime ? HALTED : MOVING
      };
      return true;
    }
    const nextStopDepartureTime = getActualTime(stops[index + 1].departure);
    const nextStopArrivalTime = getActualTime(stops[index + 1].arrival);
    if (currentTime === nextStopArrivalTime) {
      stationAndPosition = {
        station: stops[index + 1].location.crs,
        positionType: HALTED
      };
      return true;
    }
    if (currentTime >= stopDepartureTime && currentTime < nextStopDepartureTime) {
      stationAndPosition = {
        station: stop.location.crs,
        positionType: MOVING
      };
      return true;
    }
    return false;
  });

  return stationAndPosition;
};