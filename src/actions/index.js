import {
  FETCH_DATA,
  DONE_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  FETCH_PATTERN,
  DONE_FETCHING_PATTERN,
  ERROR_FETCHING_PATTERN
} from '../constants/actionTypes';

export const fetchData = data => ({
  type: FETCH_DATA,
  payload: { data }
});

export const doneFetchingData = data => ({
  payload: { data },
  type: DONE_FETCHING_DATA
});


export const errorFetchingData = error => ({
  type: ERROR_FETCHING_DATA,
  payload: { error }
});

export const fetchPattern = callingPatternUrl => ({
  type: FETCH_PATTERN,
  payload: { callingPatternUrl }
});

export const doneFetchingPattern = pattern => ({
  type: DONE_FETCHING_PATTERN,
  payload: { pattern }
});

export const errorFetchingPattern = error => ({
  type: ERROR_FETCHING_PATTERN,
  payload: { error }
});
