import React, { useState } from "react";

const Page = (props) => {
  const [outerClassName] = useState(() => {
    if (props.showOverflow) {
      return "h-screen lg:h-auto pb-6 mb-6";
    } else if (props.dontShowOverflow) {
      return "h-screen lg:h-auto overflow-hidden pb-6 mb-6";
    } else {
      return "h-screen lg:h-auto lg:overflow-hidden  pb-6 mb-6";
    }
  });

  return (
    <div className={outerClassName}>
      <div>
        <div
          className={
            " inset-y-h12pr -z-10 fixed  content-center flex-wrap h-46pr bg-no-repeat bg-cover bg-scroll w-screen bg-none " +
            " lg:flex lg:justify-center lg:bg-[#9daaa2] " +
            (props.noLeftMargin ? "" : "lg:ml-w3pr")
          }
        ></div>

        <div className="lg:flex lg:justify-center w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default Page;
