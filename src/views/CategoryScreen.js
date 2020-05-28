import React from "react";

// Components
import Header from "../components/headers/Header";
import CategoryHeader from "../components/headers/CategoryHeader";

const CategoryScreen = () => {
  return (
    <div className="parent">
      <Header />
      <CategoryHeader />
      <h1>Category screen</h1>
    </div>
  );
};

export default CategoryScreen;
