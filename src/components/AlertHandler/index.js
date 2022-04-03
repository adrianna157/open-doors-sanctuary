import React, { useContext, Fragment, useEffect } from "react";
import Alert from "../Alert";
import { NotificationContext } from "../../helpers/AlertContext/AlertContext.js";

const AlertHandler = (props) => {
  const [state, dispatch] = useContext(NotificationContext);
  useEffect(() => {
    if (state.notification.occurs) {
      console.log("alert triggered")
    }
  }, [state])


    switch (state.notification.occurs) {
      case true:

            return (
              <Alert
                textColor={state.notification.textColor}
                borderColor={state.notification.borderColor}
              >
                {state.notification.message}
              </Alert>
            );
       
      default:
        return <Fragment></Fragment>;
    }
};




export default AlertHandler;
