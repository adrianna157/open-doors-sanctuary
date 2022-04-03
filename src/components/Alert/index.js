import React, { useContext, useEffect, useState} from "react";
import { Fragment } from "react";
import { NotificationContext } from "../../helpers/AlertContext/AlertContext";
import Button from "../Button"
//

const DEFAULT = "border border-solid border-transparent";

const TEXTCOLORS = {
  greenText: "bg-green-500 text-white font-bold rounded-t px-4 py-2",
  redText: "bg-red-500 text-white font-bold rounded-t px-4 py-2",
};

const BORDERCOLORS = {
  greenBorder:
    " relative self-center border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700",
  redBorder:
    " relative self-center border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700",
};


const Alert = ({ borderColor, textColor, children, className, ...props }) => {
  className = [
    className,
    DEFAULT,
    TEXTCOLORS[textColor],
    BORDERCOLORS[borderColor],
  ].join("");

  const [alert, setAlert] = useContext(NotificationContext);
  const [failAlert, setFailAlert] = useState(false);
  useEffect(() => {
    console.log(alert.notification.message)
    if (alert.notification.occurs && alert.notification.textColor === "greenText") {
      console.log("in if statement")
      resetAlert();
    
    
    } else if (alert.notification.occurs && alert.notification.textColor === "redText") {
      setFailAlert(true);
    }
  }, [alert]);

  const renderDismissalButton = () => {
    if (failAlert) {
      return (
        
        <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3  rounded inline-flex items-center" onClick={() => {
           setAlert({
             type: "SET_NOTIFICATION",
             payload: {
               occurs: false,
               message: "",
               textColor: "",
               borderColor: "",
             },
           });
          setFailAlert(false);
        }}>
          <svg
            height="10pt"
            viewBox="0 0 329.26933 329"
            width="10pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* // this looks to be what draws the "X", i would suggest extracting the string and naming it,
              // would improve readibility (e.g. call the var "x_svg" or something)
              // since it's such a long string you could even define it in a separate file */}
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        </Button>
        
      );
      
    } else {
      return (
        <Fragment></Fragment>
      )
    }
  }

   

  const resetAlert = () => {
    setTimeout(() => {
      setAlert({
        type: "SET_NOTIFICATION",
        payload: {
          occurs: false,
          message: "",
          textColor: "",
          borderColor: "",
        },
      });
    }, 3000);
  }

  return (
    <div
      className="absolute top-0 inset-x-0 mx-8 my-2 z-50 mt-h8pr lg:mt-h13pr"
      role="alert"
    >
      <div {...props} className={className + " flex justify-between"}>
        {children}
        {renderDismissalButton()}
      </div>
    </div>
  );
};

export default Alert;
