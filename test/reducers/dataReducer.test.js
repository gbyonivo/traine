import weatherReducer from '../../src/reducers/dataReducer';
import {
  FETCH_DATA,
  DONE_FETCHING_DATA,
  ERROR_FETCHING_DATA
} from '../../src/constants/actionTypes';

import { data } from '../__testData__';


const initialState = {
  errorFetchingData: undefined,
  isFetchingData: false,
  data: {},
};

describe('FETCH_DATA', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { location: 'manchester' }, type: FETCH_DATA });
    const expected = { ...initialState, isFetchingData: true };
    expect(expected).toMatchObject(actual);
  });
});

describe('DONE_FETCHING_DATA', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { data }, type: DONE_FETCHING_DATA });
    const expected = {
      ...initialState,
      isFetchingData: false,
      data,
      errorFetchingData: undefined
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('ERROR_FETCHING_DATA', () => {
  it('should update app state', () => {
    const actual = weatherReducer(initialState, { payload: { error: 'error' }, type: ERROR_FETCHING_DATA });
    const expected = {
      ...initialState,
      isFetchingData: false,
      errorFetchingData: 'error'
    };
    expect(expected).toMatchObject(actual);
  });
});
