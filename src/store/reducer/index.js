import { combineReducers } from "redux";
import authReducer from "../auth/reducers";
import serviceReducer from "../services/reducers";
import categoryReducer from "../categories/reducers";

export default combineReducers({
  auth: authReducer,
  services: serviceReducer,
  categories: categoryReducer,
});
