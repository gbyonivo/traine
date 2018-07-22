import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../../src/components/error';

describe('Error', () => {
  it('should render correctly', () => {
    const actual = renderer.create(<Error refetch={() => {}} error={'qwqeqfdj dsfljsllsf dlsfjljsf'}/>);
    expect(actual).toMatchSnapshot();
  });
});