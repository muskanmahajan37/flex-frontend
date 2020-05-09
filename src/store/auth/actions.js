import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "../types";

export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFail = () => {
  return {
    type: LOGIN_FAIL,
  };
};

export const registerRequest = (payload) => {
  return {
    type: REGISTER_REQUEST,
    payload,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

export const registerFail = () => {
  return {
    type: REGISTER_FAIL,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
