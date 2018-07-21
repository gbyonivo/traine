import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TrainTimes from '../../src/containers/traintimes';
import combinedReducer from '../../src/reducers';
import { stateWithData } from '../__testData__';

describe('TrainTimes', () => {
  it('should render correctly', () => {
    const store = createStore(combinedReducer(), { dataReducer: stateWithData });
    const actual = create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <Provider store={store}>
          <TrainTimes />
        </Provider>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});
