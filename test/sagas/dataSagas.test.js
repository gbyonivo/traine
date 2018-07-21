import { call, put, select, takeLatest, all } from 'redux-saga/effects'; // eslint-disable-line
import { fetchDataSaga, sagas, fetchPatternSaga } from '../../src/sagas/trainTimesSagas';
import { fetchDataFromAPI, fetchPatternFromAPI } from '../../src/api/apiService';
import { doneFetchingData, doneFetchingPattern } from '../../src/actions';
import { FETCH_DATA, FETCH_PATTERN } from '../../src/constants/actionTypes';


const data = {};

describe('fetchDataSaga', () => {
  it('should call fetchDataFromAPI and doneFetchingData', () => {
    const gen = fetchDataSaga();
    const actual = [
      gen.next(),
      gen.next(data),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchDataFromAPI) },
      { done: false, value: put(doneFetchingData(data)) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('fetchPatternSaga', () => {
  it('should call fetchPatternSagaFromAPI and doneFetchingPattern', () => {
    const gen = fetchPatternSaga({ payload: { serviceIdentifier: 1 } });
    const actual = [
      gen.next(),
      gen.next(data),
      gen.next(),
    ];
    const expected = [
      { done: false, value: call(fetchPatternFromAPI, 1) },
      { done: false, value: put(doneFetchingPattern(data)) },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('sagas', () => {
  it('', () => {
    const gen = sagas();
    const actual = [
      gen.next(),
      gen.next()
    ];

    const expected = [
      {
        done: false,
        value: all([
          takeLatest(FETCH_DATA, fetchDataSaga),
          takeLatest(FETCH_PATTERN, fetchPatternSaga),
        ])
      },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});
