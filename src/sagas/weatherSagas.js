import {
  call,
  put,
  all,
  takeLatest
} from 'redux-saga/effects';
import {
  doneFetchingData,
  errorFetchingData,
} from '../actions';
import { fetchDataFromAPI } from '../api/apiService';
import { FETCH_DATA } from '../constants/actionTypes';

export function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI);
    yield put(doneFetchingData(data));
  } catch (error) {
    yield put(errorFetchingData('Error fetching data'));
  }
}

export function* sagas() {
  yield all([
    takeLatest(FETCH_DATA, fetchDataSaga)
  ]);
}

export default sagas;
