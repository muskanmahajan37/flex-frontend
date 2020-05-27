import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFail,
} from "./actions";

import axios from "axios";

export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const res = await axios.get(`http://localhost:8000/categories`);
    dispatch(fetchCategoriesSuccess(res.data));
  } catch (error) {
    dispatch(fetchCategoriesFail());
  }
};
