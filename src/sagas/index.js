import { call } from 'redux-saga/effects';
import trainTimesSagas from './trainTimesSagas';

export default function* rootSaga() {
  yield [
    call(trainTimesSagas)
  ];
}