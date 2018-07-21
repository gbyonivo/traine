export const selectData = ({ dataReducer: { data } }) => data.services
  ? data.services.filter(journey => journey.transportMode === 'TRAIN')
  : [];

export const selectPattern = ({ dataReducer: { pattern } }) => pattern.service || {};

export const selectIsFetchingPattern = ({ dataReducer: { isFetchingPattern } }) => isFetchingPattern;

export const selectIsFetchingData = ({ dataReducer: { isFetchingData } }) => isFetchingData;
