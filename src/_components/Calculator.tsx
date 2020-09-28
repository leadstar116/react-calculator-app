import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialState } from '../_constants/state.interface'
import calculate from '../_helpers/calculate'
import ButtonPanel from './ButtonPanel'
import Display from './Display'

const Calculator = () => {
  const state = useSelector((state:initialState) => state.calculateReducer)
  const dispatch = useDispatch()

  const handleClick = (buttonName: string) => {
    dispatch(calculate(state, buttonName))
  };

  return (
    <div className="calculator">
      <h2 className="text-center">Calculator</h2>
      <Display value={ state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default Calculator