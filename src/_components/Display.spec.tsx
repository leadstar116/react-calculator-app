import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Display from './Display'

describe('Display Component', () => {

  let component = renderer.create(
    <BrowserRouter>
      <Display value={"0"} />
    </BrowserRouter>
  );

  it('should render with given props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})