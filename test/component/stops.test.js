import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import Stops from '../../src/components/stops';
import { stops } from '../__testData__';
import { MOVING } from '../../src/constants/positionTypes';

describe('Stops should render correctly', () => {
  jasmine.clock().install();
  jasmine.clock().mockDate(new Date(2015, 3, 2, 6, 29, 0));

  it('should render Correctly', () => {
    const actual = create(<Stops
      stops={stops}
      currentLocation={{ station: 'VXH', positionType: MOVING }}
    />);
    expect(actual).toMatchSnapshot();
  });
  
  jasmine.clock().uninstall()
});