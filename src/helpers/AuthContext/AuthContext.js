import React, {createContext, useReducer} from "react";
import AuthReducer from './AuthReducer.js';

const initialState = {
  user: null
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthContext = createContext(initialState)
export default Store
