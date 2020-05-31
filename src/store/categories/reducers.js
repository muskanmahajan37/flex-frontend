import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
} from '../types';

const initialState = {
  categories: [],
  isLoading: false,
  loadAgain: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
        loadAgain: false,
      };
    case FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        isLoading: false,
        loadAgain: true,
      };
    default:
      return state;
  }
};
