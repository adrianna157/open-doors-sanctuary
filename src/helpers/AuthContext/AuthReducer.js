const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default AuthReducer
