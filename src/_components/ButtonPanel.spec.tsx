import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ButtonPanel from './ButtonPanel'

describe('ButtonPanel Component', () => {

  let component = renderer.create(
    <BrowserRouter>
      <ButtonPanel clickHandler={(buttonName: string) => {}} />
    </BrowserRouter>
  );

  it('should render with given props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})