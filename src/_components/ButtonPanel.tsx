import React from 'react'
import Button from './Button'

type Props = {
  clickHandler: (buttonName: string) => void,
}

const ButtonPanel = (props: Props) => {
  return (
    <div className="calculator-button-panel">
      <div>
        <Button name="AC" clickHandler={props.clickHandler} />
        <Button name="+/-" clickHandler={props.clickHandler} />
        <Button name="%" clickHandler={props.clickHandler} />
        <Button name="÷" clickHandler={props.clickHandler} style="orange" />
      </div>
      <div>
        <Button name="7" clickHandler={props.clickHandler} />
        <Button name="8" clickHandler={props.clickHandler} />
        <Button name="9" clickHandler={props.clickHandler} />
        <Button name="x" clickHandler={props.clickHandler} style="orange" />
      </div>
      <div>
        <Button name="4" clickHandler={props.clickHandler} />
        <Button name="5" clickHandler={props.clickHandler} />
        <Button name="6" clickHandler={props.clickHandler} />
        <Button name="-" clickHandler={props.clickHandler} style="orange" />
      </div>
      <div>
        <Button name="1" clickHandler={props.clickHandler} />
        <Button name="2" clickHandler={props.clickHandler} />
        <Button name="3" clickHandler={props.clickHandler} />
        <Button name="+" clickHandler={props.clickHandler} style="orange" />
      </div>
      <div>
        <Button name="0" clickHandler={props.clickHandler} style="wide" />
        <Button name="." clickHandler={props.clickHandler} />
        <Button name="=" clickHandler={props.clickHandler} style="orange" />
      </div>
    </div>
  )
}

export default ButtonPanel