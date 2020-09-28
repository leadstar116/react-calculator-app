import React from 'react'

type Props = {
  value: string,
}

const Display = (props: Props) => {
  return (
    <div className="calculator-display">
      <div>{props.value}</div>
    </div>
  );
}

export default Display