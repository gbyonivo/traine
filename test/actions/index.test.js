import { fetchData, doneFetchingData, errorFetchingData } from '../../src/actions';
import { FETCH_DATA, DONE_FETCHING_DATA, ERROR_FETCHING_DATA } from '../../src/constants/actionTypes';

describe('fetchData', () => {
  it('should return payload and type', () => {
    const actual = fetchData('manchester');
    const expected = {
      type: FETCH_DATA,
      payload: { location: 'manchester' }
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
