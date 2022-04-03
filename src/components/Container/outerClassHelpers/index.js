import { generateWidth, generateHeight } from './dimHelpers.js'

function generateOuterClasses(props) {
  let returnedClassName

  if (props.overrideCSS) {
    if (props.outerClassName) {
      returnedClassName = props.outerClassName
    } else {
      returnedClassName = ""
    }
  } else {
    const height = generateHeight(props)
    let width = generateWidth(props)
    let greyed
    let margin
    let rounded
    let className
    let marginTop

    if (props.grayedBackground) {
      greyed = " z-40 fixed"
    } else {
      greyed = ""
    }

    if (props.mariginTop) {
      marginTop = " " + props.mariginTop
    } else {
      marginTop = " mt-h28pr"
    }

    if (props.margin) {
      margin = " " + props.margin
    } else {
      margin = ""
    }

    if (props.outerClassName) {
      className = " " + props.outerClassName
    } else {
      className = ""
    }

    if (props.rounded === "md") {
      rounded = " rounded-md"
    } else if (props.rounded === "lg") {
      rounded = " rounded-lg"
    } else {
      rounded = " rounded"
    }

    returnedClassName = "bg-white  shadow-container lg:shadow-xl " +
      width + height + marginTop +
      margin + rounded +
      greyed + className
  }

  return returnedClassName

}

export default generateOuterClasses
