import React from 'react';
import { create } from 'react-test-renderer';
import PatternHeader from '../../src/components/patternHeader';

const props = {
  headerData: {
    destination: 'Better Naija',
    origin: 'Now Naija',
    operatedBy: 'Me and You'
  }
};

describe('patternHeader', () => {
  it('should render correctly', () => {
    const actual = create(<PatternHeader {...props}/>);
    expect(actual).toMatchSnapshot();
  });
});