import React from 'react';
import { create } from 'react-test-renderer';
import Loading from '../../src/components/loading';


describe('Loading', () => {
  it('should render correctly', () => {
    const actual = create(<Loading/>);
    expect(actual).toMatchSnapshot();
  });
});