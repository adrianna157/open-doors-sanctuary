import React, { createContext, useReducer } from "react";
import AlertNotificationReducer from "./AlertReducer.js";

const initialState = {
  notification: {
    occurs: false,
    message: "",
    textColor: "",
    borderColor:"",
  },
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(AlertNotificationReducer, initialState);
  return (
    <NotificationContext.Provider value={[state, dispatch]}>
      {children}
    </NotificationContext.Provider>
  );
};

export const NotificationContext = createContext(initialState);
export default Store;
