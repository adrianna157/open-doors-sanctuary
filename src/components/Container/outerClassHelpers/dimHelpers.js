export function generateWidth(props) {
  if (props.width === "2/6") {
    return " w-2/6"
  } else if (props.width === "26pr") {
    return " w-26pr"
  } else if (props.width) {
    return " " + props.width
  } else {
    return ""
  }
}

export function generateHeight(props) {
  if (props.fullHeight) {
    return " h-full"
  } else if (props.autoHeight) {
    return " h-auto"
  } else if (props.percentHeight) {
    return " h-56pr"
  } else if (props.height) {
    return " " + props.height
  } else {
    return ""
  }
}
