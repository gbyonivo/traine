import {
  call,
  put,
  all,
  takeLatest
} from 'redux-saga/effects';
import {
  doneFetchingData,
  errorFetchingData,
  errorFetchingPattern,
  doneFetchingPattern,
} from '../actions';
import { fetchDataFromAPI, fetchPatternFromAPI } from '../api/apiService';
import { FETCH_PATTERN, FETCH_DATA } from '../constants/actionTypes';

export function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI);
    yield put(doneFetchingData(data));
  } catch (error) {
    yield put(errorFetchingData('Error fetching data'));
  }
}

export function* fetchPatternSaga({ payload: { serviceIdentifier } }) {
  try {
    const data = yield call(fetchPatternFromAPI, serviceIdentifier);
    yield put(doneFetchingPattern(data));
  } catch (error) {
    yield put(errorFetchingPattern('Error fetching pattern'));
  }
}

export function* sagas() {
  yield all([
    takeLatest(FETCH_DATA, fetchDataSaga),
    takeLatest(FETCH_PATTERN, fetchPatternSaga)
  ]);
}

export default sagas;
