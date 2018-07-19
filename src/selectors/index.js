export const selectIsFetchingData = ({ weatherReducer: { isFetchingData } }) => isFetchingData;

export const selectData = ({ weatherReducer: { data } }) => data;
