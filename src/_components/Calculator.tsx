import React, { useState } from 'react'
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const Calculator = () => {
  const [next, setNext] = useState("")
  const [total, setTotal] = useState("")
  const [operation, setOperation] = useState("")

  const handleClick = (buttonName: string) => {

  };

  return (
    <div className="calculator">
      <h2 className="text-center">Calculator</h2>
      <Display value={next || total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default Calculator