import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from '../../src/components/basicElements/textInput';

describe('Button component', () => {
  it('renders correctly when isLoading is true', () => {
    const actual = renderer.create(
      <TextInput
        value="play"
        label="play"
        name="play"
        placeholder="play"
        onChange={() => {}}
      />
    );
    expect(actual).toMatchSnapshot();
  });
});
