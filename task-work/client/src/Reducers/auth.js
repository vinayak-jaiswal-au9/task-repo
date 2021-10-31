import { LOGIN, LOGOUT, REGISTER } from "../ConstantActions/actionTypes";

const authReducer = (
  state = {
    authData: null,
  },
  action
) => {
  const { type } = action;
  switch (type) {
    case LOGIN:
    case REGISTER:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
