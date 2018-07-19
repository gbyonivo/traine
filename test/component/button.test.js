import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../src/components/basicElements/button';

describe('Button component', () => {
  it('renders correctly when isLoading is true', () => {
    const actual = renderer.create(
      <Button
        value="play"
        onClick={() => {}}
        isLoading={true}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});

describe('Button component', () => {
  it('renders correctly when isLoading is false', () => {
    const actual = renderer.create(
      <Button
        value="play"
        onClick={() => {}}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});