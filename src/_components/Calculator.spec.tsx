import configureStore from 'redux-mock-store';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Calculator from './Calculator'
import { CalculatorState } from '../_constants/calculate.interface';

describe('Calculator Component', () => {
  const calculatorState = {
    next: "3",
    total: "2",
    operation: "+"
  } as CalculatorState;

  const mockStore = configureStore();
  let store = mockStore({
    calculateReducer: calculatorState,
  })

  store.dispatch = jest.fn();

  let component = renderer.create(
    <Provider store={store}>
      <Calculator />
    </Provider>
  );

  it('should render with given props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})