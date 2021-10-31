import * as api from "../api/index";
import { LOGIN, REGISTER } from "../ConstantActions/actionTypes";

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(formData);
    dispatch({
      type: REGISTER,
      data,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(formData);
    dispatch({
      type: LOGIN,
      data,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
