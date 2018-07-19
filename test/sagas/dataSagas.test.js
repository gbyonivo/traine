import { call, put, select, takeLatest, all } from 'redux-saga/effects'; // eslint-disable-line
import { fetchDataSaga, sagas } from '../../src/sagas/weatherSagas';
import { fetchDataFromAPI } from '../../src/api/apiService';
import { doneFetchingData } from '../../src/actions';

import { data } from '../__testData__';
import { FETCH_DATA } from '../../src/constants/actionTypes';

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
          takeLatest(FETCH_DATA, fetchDataSaga)
        ])
      },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});
