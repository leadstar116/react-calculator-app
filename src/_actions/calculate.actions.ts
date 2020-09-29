import { CalculatorState } from "../_constants/calculate.interface"

export const CALCULATE_RESET = 'CALCULATE_RESET'
export const calculateReset = () => ({
    type: CALCULATE_RESET,
    payload: {}
})

export const CALCULATE_UPDATE = 'CALCULATE_UPDATE'
export const calculateUpdate = (data: CalculatorState) => ({
    type: CALCULATE_UPDATE,
    payload: data
})
