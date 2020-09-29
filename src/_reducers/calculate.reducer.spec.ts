import calculateReducer from './calculate.reducer'
import { CalculatorState } from '../_constants/calculate.interface'
import { CALCULATE_RESET, CALCULATE_UPDATE } from '../_actions/calculate.actions'

const initialState = {
  next: "4",
  total: "5",
  operation: "+"
} as CalculatorState

describe('calculate reducer test', () => {
  test('should reset calculate state', () => {
    const action = {
      type: CALCULATE_RESET,
      payload: {}
    }
    const expectedState = {
      next: "",
      total: "",
      operation: ""
    }
    const newState = calculateReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })

  test('should update state', () => {
    const action = {
      type: CALCULATE_UPDATE,
      payload: {
        next: "6",
        total: "3",
        operation: "-"
      }
    }
    const expectedState = {
      next: "6",
      total: "3",
      operation: "-"
    }
    const newState = calculateReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })
})