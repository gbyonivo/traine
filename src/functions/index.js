const extractMessage = (arrivalOrDeperature, text) => arrivalOrDeperature.realTime //eslint-disable-line
  ? arrivalOrDeperature.scheduled.scheduledTime === arrivalOrDeperature.realTime.realTimeServiceInfo.realTime
    ? 'On Time'
    : `${text} ${arrivalOrDeperature.realTime.realTimeServiceInfo.realTime}`
  : `${text} ${arrivalOrDeperature.scheduled.scheduledTime}`;

export const getTrainStatusMessage = (arrival, departure) => arrival.notApplicable
  ? extractMessage(departure, 'Dept.')
  : extractMessage(arrival, 'Exp.');


export const extractTime = date => date.substr(11, 5);