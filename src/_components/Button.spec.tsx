import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Button from './Button'

describe('Button Component', () => {

  let component = renderer.create(
    <BrowserRouter>
      <Button name="÷" clickHandler={(buttonName: string) => {}} style="orange" />
    </BrowserRouter>
  );

  it('should render with given props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})