import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TrainTimes from '../../src/components/traintimes';

describe('TrainTimes', () => {
  it('should render correctly', () => {
    const actual = create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <TrainTimes/>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});
