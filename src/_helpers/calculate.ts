import Big from 'big.js'
import isNumber from "./isNumber"
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux';
import { calculateReset, calculateUpdate } from '../_actions/calculate.actions';
import { CalculatorState } from '../_constants/calculate.interface'
import { alertFailure } from '../_actions/alert.actions';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

/**
 * Params: a button name and a calculator state object
 * Action: Run calculation by calling API endpoint.
 *
 * Calculate state object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
const apiUrl = 'https://nestjs-calculator-backend-api.herokuapp.com/calculate'
const calculate = (state: CalculatorState, buttonName: string) => async (dispatch: MyThunkDispatch) => {
  if (buttonName === "AC") {
    return dispatch(calculateReset())
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && state.next === "0") {
      return;
    }
    // If there is an operation, update next
    if (state.operation) {
      if (state.next) {
        return dispatch(calculateUpdate({
          ...state,
          next: state.next + buttonName,
        }))
      }
      return dispatch(calculateUpdate({
        ...state,
        next: buttonName,
      }))
    }
    // If there is no operation, update next and clear the value
    if (state.next) {
      const next = state.next === "0" ? buttonName : state.next + buttonName;
      return dispatch(calculateUpdate({
        ...state,
        next: next,
        total: "",
      }))
    }
    return dispatch(calculateUpdate({
      ...state,
      next: buttonName,
      total: "",
    }))
  }

  if (buttonName === "%") {
    if (state.operation && state.next) {
      try {
        let response = await fetch(
          apiUrl,
          {
              method: 'POST',
              headers: { 'Content-type': 'application/json' },
              body: JSON.stringify(state)
          }
        )
        const result = await response.json()
        return dispatch(calculateUpdate({
          ...state,
          total: Big(result)
            .div(Big("100"))
            .toString(),
          next: "",
          operation: "",
        }))
      } catch(e) {
        return dispatch(alertFailure(e))
      }
    }
    if (state.next) {
      return dispatch(calculateUpdate({
        ...state,
        next: Big(state.next)
          .div(Big("100"))
          .toString(),
      }))
    }
    return;
  }

  if (buttonName === ".") {
    if (state.next) {
      // ignore a . if the next number already has one
      if (state.next.includes(".")) {
        return;
      }
      return dispatch(calculateUpdate({
        ...state,
        next: state.next + "."
      }))
    }
    return dispatch(calculateUpdate({
      ...state,
      next: "0."
    }))
  }

  if (buttonName === "=") {
    if (state.next && state.operation) {
      try {
        let response = await fetch(
          apiUrl,
          {
              method: 'POST',
              headers: { 'Content-type': 'application/json' },
              body: JSON.stringify(state)
          }
        )
        const result = await response.json()
        return dispatch(calculateUpdate({
          ...state,
          total: result,
          next: "",
          operation: "",
        }))
      } catch(e) {
        return dispatch(alertFailure(e))
      }
    } else {
      // '=' with no operation, nothing to do
      return;
    }
  }

  if (buttonName === "+/-") {
    if (state.next) {
      return dispatch(calculateUpdate({
        ...state,
        next: (-1 * parseFloat(state.next)).toString()
      }))
    }
    if (state.total) {
      return dispatch(calculateUpdate({
        ...state,
        total: (-1 * parseFloat(state.total)).toString()
      }))
    }
    return;
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!state.next && !state.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (state.operation) {
    try {
      let response = await fetch(
        apiUrl,
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(state)
        }
      )
      const result = await response.json()
      return dispatch(calculateUpdate({
        ...state,
        total: result,
        next: "",
        operation: buttonName,
      }))
    } catch(e) {
      return dispatch(alertFailure(e))
    }
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!state.next) {
    return dispatch(calculateUpdate({
      ...state,
      operation: buttonName
    }))
  }

  // save the operation and shift 'next' into 'total'
  return dispatch(calculateUpdate({
    total: state.next,
    next: "",
    operation: buttonName,
  }))
}

export default calculate