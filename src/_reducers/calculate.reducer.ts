import { CALCULATE_RESET, CALCULATE_UPDATE } from "../_actions/calculate.actions";
import { CalculatorState } from "../_constants/calculate.interface"

const calculatorState = {
  next: "",
  total: "",
  operation: ""
} as CalculatorState;

const calculateReducer = (state = calculatorState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case CALCULATE_RESET:
      return {
        next: "",
        total: "",
        operation: ""
      }
    case CALCULATE_UPDATE:
      return payload
    default:
      break;
  }
  return state
}

export default calculateReducer