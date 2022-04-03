import React, { useState } from "react";
import { generateButtonClass } from "./generateButtonClass.js";

const Button = (props) => {
  const [className] = useState(generateButtonClass(props))

  return (
    <button type={props.type} onClick={props.onClick} className={className}>
      {props.children}
    </button>
  )
}

export default Button;
