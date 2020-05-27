import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAIL,
} from "../types";

const initialState = {
  services: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
        isLoading: false,
      };
    case FETCH_SERVICES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
