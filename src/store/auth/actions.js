import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  LOGOUT,
} from '../types';

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFail = () => ({
  type: REGISTER_FAIL,
});

export const editUserRequest = (payload) => ({
  type: EDIT_USER_REQUEST,
  payload,
});

export const editUserSuccess = (payload) => ({
  type: EDIT_USER_SUCCESS,
  payload,
});

export const editUserFail = () => ({
  type: EDIT_USER_FAIL,
});

export const logout = () => ({
  type: LOGOUT,
});
