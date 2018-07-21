import React from 'react';
import { create } from 'react-test-renderer';
import TrainIcon from '../../src/components/trainIcon';

const props = {
  size: 'small',
  className: 'salah'
};

describe('Train Icon', () => {
  it('should render correctly', () => {
    const actual = create(<TrainIcon {...props}/>);
    expect(actual).toMatchSnapshot();
  });
});