import {
  FETCH_DATA,
  DONE_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  FETCH_PATTERN,
  DONE_FETCHING_PATTERN,
} from '../constants/actionTypes';

const initialState = {
  errorFetchingData: null,
  isFetchingData: false,
  data: {},
  pattern: {},
  errorFetchingPattern: null,
  isFetchingPattern: false
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
    errorFetchingData: null,
  }),

  [ERROR_FETCHING_DATA]: (state, { error: errorFetchingData }) => ({
    ...state,
    isFetchingData: false,
    errorFetchingData
  }),

  [FETCH_PATTERN]: state => ({
    ...state,
    isFetchingPattern: true
  }),

  [DONE_FETCHING_PATTERN]: (state, { pattern }) => ({
    ...state,
    isFetchingPattern: false,
    pattern,
    errorFetchingPattern: null,
  }),

  [ERROR_FETCHING_DATA]: (state, { error: errorFetchingPattern }) => ({
    ...state,
    isFetchingPattern: false,
    errorFetchingPattern
  }),

};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action.payload) : state;
};
