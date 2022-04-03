import React, { useState } from "react"
import ToolTip from "../ToolTip"
import { ReactComponent as InformationIcon } from "../../assets/Images/information.svg";

const TextField = (props) => {
  const [fieldClassName] = useState(props.fieldClassName ? " " + props.fieldClassName : "")
  const [fieldHeight] = useState(props.fieldHeight ? " " + props.fieldHeight : " h-4pr")
  const [fieldWidth] = useState(props.fieldHeight ? " " + props.fieldWidth : "")
  const [fieldPadding] = useState(props.fieldPadding ? " " + props.fieldPadding : " pl-4")
  const [width] = useState(props.width ? props.width : "w-full")
  const [className] = useState(props.className ? " " + props.className : "")
	const [noRounded] = useState(props.noRounded ? "" : " rounded")
  const [noFullFieldWidth] = useState(props.noFullFieldWidth ? "" : " w-full")
  const [height] = useState(props.height ? " " + props.height : "")

  const [label] = useState(props.label ? <p className="text-[#a26360] font-light mb-1">{props.label}</p> : "")
  const [info] = useState(props.info ? <ToolTip tooltipText={props.info}><InformationIcon /></ToolTip>: "")

  return (
    <div className={width + height + className}>
      <div className="flex ">
        {label}
        {info}
      </div>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
        placeholder={props.placeHolder}
        className={
          "textfield-bg-color placeholder-[#a26360] placeholder-opacity-65 border border-[#a26360] text-[#a26360] py-h3pr lg:py-h1pr" +
          noFullFieldWidth +
          noRounded +
          fieldHeight +
          fieldWidth +
          fieldPadding +
          fieldClassName
        }
      />
    </div>
  );
}

export default TextField;
