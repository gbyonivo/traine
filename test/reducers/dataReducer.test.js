import dataReducer from '../../src/reducers/dataReducer';
import {
  FETCH_DATA,
  DONE_FETCHING_DATA,
  ERROR_FETCHING_DATA,
  FETCH_PATTERN,
  DONE_FETCHING_PATTERN,
  ERROR_FETCHING_PATTERN
} from '../../src/constants/actionTypes';

const data = { x: '1' };

const initialState = {
  errorFetchingData: null,
  isFetchingData: false,
  data: {},
  pattern: {},
  errorFetchingPattern: null,
  isFetchingPattern: false
};

describe('FETCH_DATA', () => {
  it('should update app state', () => {
    const actual = dataReducer(initialState, { payload: { location: 'manchester' }, type: FETCH_DATA });
    const expected = { ...initialState, isFetchingData: true };
    expect(expected).toMatchObject(actual);
  });
});

describe('DONE_FETCHING_DATA', () => {
  it('should update app state', () => {
    const actual = dataReducer(initialState, { payload: { data }, type: DONE_FETCHING_DATA });
    const expected = {
      ...initialState,
      isFetchingData: false,
      data,
      errorFetchingData: null
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('ERROR_FETCHING_DATA', () => {
  it('should update app state', () => {
    const actual = dataReducer(initialState, { payload: { error: 'error' }, type: ERROR_FETCHING_DATA });
    const expected = {
      ...initialState,
      isFetchingData: false,
      errorFetchingData: 'error'
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('FETCH_PATTERN', () => {
  it('should update app state', () => {
    const actual = dataReducer(initialState, { payload: { serviceIdentifier: '' }, type: FETCH_PATTERN });
    const expected = { ...initialState, isFetchingPattern: true };
    expect(expected).toMatchObject(actual);
  });
});

describe('DONE_FETCHING_PATTERN', () => {
  it('should update app state', () => {
    const actual = dataReducer(initialState, { payload: { pattern: {} }, type: DONE_FETCHING_PATTERN });
    const expected = {
      ...initialState,
      isFetchingPattern: false,
      pattern: {},
      errorFetchingPattern: null
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('ERROR_FETCHING_PATTERN', () => {
  it('should update app state', () => {
    const actual = dataReducer(initialState, { payload: { error: 'error' }, type: ERROR_FETCHING_PATTERN });
    const expected = {
      ...initialState,
      isFetchingPattern: false,
      errorFetchingPattern: 'error'
    };
    expect(expected).toMatchObject(actual);
  });
});
