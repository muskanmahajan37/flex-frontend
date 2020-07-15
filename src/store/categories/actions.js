import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
} from '../types';

export const fetchCategoriesRequest = (payload) => ({
  type: FETCH_CATEGORIES_REQUEST,
  payload,
});

export const fetchCategoriesSuccess = (payload) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFail = (payload) => ({
  type: FETCH_CATEGORIES_FAIL,
  payload,
});
