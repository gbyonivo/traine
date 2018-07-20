export const selectData = ({ dataReducer: { data } }) => data.services || [];

export const selectPattern = ({ dataReducer: { pattern } }) => pattern.service || {};

export const selectIsFetchingPattern = ({ dataReducer: { isFetchingPattern } }) => isFetchingPattern;
