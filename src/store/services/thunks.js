import {
  fetchServicesRequest,
  fetchServicesSuccess,
  fetchServicesFail,
} from './actions';

import axios from 'axios';

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const res = await axios.get(`/services`);
    dispatch(fetchServicesSuccess(res.data));
  } catch (error) {
    dispatch(fetchServicesFail());
  }
};
