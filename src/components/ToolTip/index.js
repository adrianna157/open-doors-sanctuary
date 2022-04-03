import React from "react";

const ToolTip = ({ children, tooltipText }) => {

  const tipRef = React.createRef(null);
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    tipRef.current.style.marginLeft = "20px";
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0;
    tipRef.current.style.marginLeft = "10px";
  }
  return (
    <div
      className=" flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute bg-[#9daaa2] to-gray-700 text-white px-10 py-10 rounded flex items-center transition-all duration-150"
        style={{ left: "50%", opacity: 0 }}
        ref={tipRef}
      >
        <div
          className="bg-[#9daaa2] h-3 w-3 absolute"
          style={{ left: "-6px", transform: "rotate(45deg)" }}
        />
        {tooltipText}
      </div>
      {children}
    </div>
  );
}

export default ToolTip
