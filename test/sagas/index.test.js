import { call } from 'redux-saga/effects';
import trainTimesSagas from '../../src/sagas/trainTimesSagas';
import rootSaga from '../../src/sagas';

describe('rootSaga', () => {
  it('should call weatherSagas', () => {
    const gen = rootSaga();
    const actual = [
      gen.next(),
      gen.next()
    ];
    const expected = [
      { done: false, value: [call(trainTimesSagas)] },
      { done: true, value: undefined }
    ];
    expect(actual).toEqual(expected);
  });
});