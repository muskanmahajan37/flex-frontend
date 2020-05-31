import {
  registerRequest,
  registerSuccess,
  registerFail,
  loginRequest,
  loginSuccess,
  loginFail,
  logout as logoutAPI,
} from './actions';

import axios from 'axios';

export const register = ({
  name,
  email,
  password,
  password_confirmation,
}) => async (dispatch) => {
  dispatch(registerRequest({ name, email, password, password_confirmation }));
  try {
    const body = JSON.stringify({
      name,
      email,
      password,
      password_confirmation,
    });
    const res = await axios.post(`/register`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFail());
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  dispatch(loginRequest({ email, password }));
  try {
    const body = JSON.stringify({ email, password });
    const res = await axios.post(`/login`, body, {
      headers: {
        'Content-Type': 'application/json',
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
