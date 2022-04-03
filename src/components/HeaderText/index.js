import React, { useState } from "react";

const HeaderText = (props) => {
  const [fontSize] = useState(props.fontSize ? " " + props.fontSize : " text-xl")
  const [bold] = useState(props.noBold ? "" : " font-bold")
  const [className] = useState(" " + props.className)

  return (
    <div
      className={
        "mb-2 font-display" + bold + fontSize + className
      }
    >
      {props.children}
    </div>
  );
}

export default HeaderText;
