import {
  registerRequest,
  registerSuccess,
  registerFail,
  loginRequest,
  loginSuccess,
  loginFail,
  logout as logoutAPI,
} from "./actions";

import axios from "axios";

export const register = ({ email, password }) => async (dispatch) => {
  dispatch(registerRequest({ email, password }));
  try {
    const body = JSON.stringify({ email, password });
    const res = await axios.post(
      "http://localhost:8000/api/auth/signup",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFail());
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  dispatch(loginRequest({ email, password }));
  try {
    const body = JSON.stringify({ email, password });
    const res = await axios.post("http://localhost:8000/api/auth/login", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFail());
    throw error;
  }
};

export const logout = () => (dispatch) => {
  dispatch(logoutAPI());
};

export const getAuthFromState = (state) => {
  if (!!state.auth.token) {
    return state.auth.token;
  }
  return null;
};
