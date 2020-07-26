import {
  loginRequest,
  loginSuccess,
  loginFail,
  registerRequest,
  registerSuccess,
  registerFail,
  editUserRequest,
  editUserSuccess,
  editUserFail,
  logout as logoutAPI,
} from './actions';

import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const register = ({
  name,
  username,
  email,
  password,
  password_confirmation,
}) => async (dispatch) => {
  dispatch(
    registerRequest({ name, username, email, password, password_confirmation })
  );
  try {
    const body = JSON.stringify({
      name,
      username,
      email,
      password,
      password_confirmation,
    });
    const res = await axios.post(`${API_URL}/register`, body, {
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
    const res = await axios.post(`${API_URL}/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return dispatch(loginSuccess(res.data));
  } catch (error) {
    return dispatch(loginFail());
  }
};

export const editUser = ({ name, username, email, image }) => async (
  dispatch,
  getState
) => {
  const token = getState().auth.token;
  const userId = getState().auth.user.id;

  dispatch(editUserRequest({ name, username, email, image }));

  const formData = new FormData();
  formData.append('name', name);
  formData.append('username', username);
  formData.append('email', email);
  formData.append('image', image.name);
  formData.append('_method', 'PATCH');

  try {
    const res = await axios.post(`${API_URL}/users/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.data;

    let final = {
      id: data.user.id,
      username: data.user.username,
      email: data.user.email,
      name: data.user.name,
      image: data.user.image,
    };

    return dispatch(editUserSuccess(final));
  } catch (error) {
    dispatch(editUserFail());
    console.log(error);
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
