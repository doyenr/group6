const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };

    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return state;

    case "REGISTER_SUCCESS":
      console.log("register success");
      return {
        ...state,
        authError: null
      };

    case "REGISTER_ERROR":
      console.log("register error");
      return {
        ...state,
        authError: action.err.message
      };

    case "DELETE_SUCCESS":
      console.log("delete success");
      return {
        ...state,
        authError: null
      };

    case "DELETE_ERROR":
      console.log("delete error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
