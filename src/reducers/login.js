const loginReducer = (
    state = {
      userLoggedIn: false,
      userName: null
    }, action) => {
    switch(action.type) {
      case "USER_LOGGED_IN":
        return {
          ...state,
          userLoggedIn: true,
          userName: action.userName
        };
      default:
        return state;
    }
  }
  export default loginReducer