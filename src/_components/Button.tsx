import React from 'react'

type Props = {
  name: string,
  style?: string,
  clickHandler: (buttonName: string) => void,
}

const Button = (props: Props) => {
  return (
    <div className={props.style ? "calculator-button " + props.style : "calculator-button"}>
      <button onClick={() => props.clickHandler(props.name)}>{props.name}</button>
    </div>
  );
}

export default Button