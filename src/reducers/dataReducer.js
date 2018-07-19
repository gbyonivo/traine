import {
  FETCH_DATA,
  DONE_FETCHING_DATA,
  ERROR_FETCHING_DATA,
} from '../constants/actionTypes';

const initialState = {
  errorFetchingData: undefined,
  isFetchingData: false,
  data: {},
};

const ACTION_HANDLERS = {
  [FETCH_DATA]: state => ({
    ...state,
    isFetchingData: true
  }),

  [DONE_FETCHING_DATA]: (state, { data }) => ({
    ...state,
    isFetchingData: false,
    data,
    errorFetchingData: undefined,
  }),

  [ERROR_FETCHING_DATA]: (state, { error: errorFetchingData }) => ({
    ...state,
    isFetchingData: false,
    errorFetchingData
  }),

};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
};
