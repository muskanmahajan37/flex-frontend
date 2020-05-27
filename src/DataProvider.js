import React, { useEffect } from "react";

// Redux
import { fetchServices } from "./store/services/thunks";
import { fetchCategories } from "./store/categories/thunks";
import { useDispatch } from "react-redux";
import myStore from "./store/store";

const DataProvider = ({ children }) => {
  const { store } = myStore();
  const dispatch = useDispatch();

  const load = store.getState().categories.loadAgain;

  useEffect(() => {
    load && dispatch(fetchCategories());
    dispatch(fetchServices());
  }, [dispatch]);

  return <React.Fragment>{React.Children.only(children)}</React.Fragment>;
};

export default DataProvider;
