import React, { Fragment, useState } from "react";
import generateOuterClasses from "./outerClassHelpers/";
import generateInnerClasses from "./innerClassHelpers/";

const Container = (props) => {
  const { id } = props
  const [outerClassName] = useState(generateOuterClasses(props));
  const [innerClassName] = useState(generateInnerClasses(props));

  function renderGrayedBackground() {
    if (props.grayedBackground) {
      return (
        <div className="fixed h-screen w-screen flex bg-black bg-opacity-25 z-0 inset-0"></div>
      );
    }
  }

  return (
    <Fragment>
      <div className={outerClassName}>
        <div className={innerClassName} id={id}>{props.children}</div>
      </div>
      {renderGrayedBackground()}
    </Fragment>
  );
};

export default Container;
