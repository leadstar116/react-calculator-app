import { AlertState } from "./alert.interface";
import { CalculatorState } from "./calculate.interface";

export interface initialState {
  calculateReducer: CalculatorState,
  alertReducer: AlertState,
}