function generateInnerClasses(props) {
  let returnedClassName

  if (props.overrideCSS) {
    if (props.className) {
      returnedClassName = props.className
    } else {
      returnedClassName = ""
    }
  } else {
    let className
    let centerText
    let padding

    if (props.centerText) {
      centerText = " text-center"
    } else {
      centerText = ""
    }

    if (props.padding) {
      padding = " " + props.padding
    } else {
      padding = " p-2"
    }

    if (props.className) {
      className = " " + props.className
    } else {
      className = ""
    }

    returnedClassName = "h-full standard-text-font container-shadow " +
      padding +
      centerText +
      className
  }

  return returnedClassName
}

export default generateInnerClasses
