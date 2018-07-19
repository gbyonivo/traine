import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../src/components/home';

describe('Home', () => {
  it('should render correctly', () => {
    const actual = create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <Home/>
      </MemoryRouter>
    );
    expect(actual).toMatchSnapshot();
  });
});
