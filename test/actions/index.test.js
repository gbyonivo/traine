import { fetchData, doneFetchingData, errorFetchingData, fetchPattern, doneFetchingPattern, errorFetchingPattern } from '../../src/actions';
import { FETCH_DATA, DONE_FETCHING_DATA, ERROR_FETCHING_DATA, FETCH_PATTERN, DONE_FETCHING_PATTERN, ERROR_FETCHING_PATTERN } from '../../src/constants/actionTypes';

describe('fetchData', () => {
  it('should return payload and type', () => {
    const actual = fetchData('manchester');
    const expected = {
      type: FETCH_DATA,
      payload: { data: 'manchester' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('doneFetchingData', () => {
  it('should return payload and type', () => {
    const actual = doneFetchingData('x');
    const expected = {
      type: DONE_FETCHING_DATA,
      payload: { data: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('errorFetchingData', () => {
  it('should return payload and type', () => {
    const actual = errorFetchingData('x');
    const expected = {
      type: ERROR_FETCHING_DATA,
      payload: { error: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('fetchPattern', () => {
  it('should return payload and type', () => {
    const actual = fetchPattern('naija');
    const expected = {
      type: FETCH_PATTERN,
      payload: { serviceIdentifier: 'naija' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('doneFetchingPattern', () => {
  it('should return payload and type', () => {
    const actual = doneFetchingPattern('x');
    const expected = {
      type: DONE_FETCHING_PATTERN,
      payload: { pattern: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});

describe('errorFetchingPattern', () => {
  it('should return payload and type', () => {
    const actual = errorFetchingPattern('x');
    const expected = {
      type: ERROR_FETCHING_PATTERN,
      payload: { error: 'x' }
    };
    expect(expected).toMatchObject(actual);
  });
});