import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAIL,
} from "../types";

export const fetchServicesRequest = (payload) => ({
  type: FETCH_SERVICES_REQUEST,
  payload,
});

export const fetchServicesSuccess = (payload) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload,
});

export const fetchServicesFail = (payload) => ({
  type: FETCH_SERVICES_FAIL,
  payload,
});
