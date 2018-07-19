import {
  FETCH_DATA,
  DONE_FETCHING_DATA,
  ERROR_FETCHING_DATA
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
