import { call } from 'redux-saga/effects';
import weatherSagas from './weatherSagas';

export default function* rootSaga() {
  yield [
    call(weatherSagas)
  ];
}