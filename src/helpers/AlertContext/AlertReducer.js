const AlertNotificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        ...state,
        notification: action.payload,
      };
    default:
      return state;
  }
};

export default AlertNotificationReducer;
