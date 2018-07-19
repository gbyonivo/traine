import {
  FETCH_DATA,
  DONE_FETCHING_DATA,
  ERROR_FETCHING_DATA
} from '../constants/actionTypes';

export const fetchData = location => ({
  type: FETCH_DATA,
  payload: { location }
});

export const doneFetchingData = data => ({
  payload: { data },
  type: DONE_FETCHING_DATA
});


export const errorFetchingData = error => ({
  type: ERROR_FETCHING_DATA,
  payload: { error }
});
