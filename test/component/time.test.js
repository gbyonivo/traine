import React from 'react';
import { create } from 'react-test-renderer';
import Time from '../../src/components/time';

const props = {
  date: '2018-07-21T00:35:00+01:00'
};

describe('Time', () => {
  it('should render correctly', () => {
    const actual = create(<Time {...props}/>);
    expect(actual).toMatchSnapshot();
  });
});