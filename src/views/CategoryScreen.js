import React, { useState, useEffect } from "react";
import axios from "axios";

// Styling
import "../style/service.css";

// Components
import Header from "../components/headers/Header";
import CategoryHeader from "../components/headers/CategoryHeader";
import Loader from "../components/Loader";

// React-router
import { Link } from "react-router-dom";

const CategoryScreen = ({ location }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = location;
  const { categoryId, categoryName, subcategories } = state;

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8000/categories/${categoryId}/services`
      );
      setData(res.data);
      setLoading(false);
    };
    fetchServices();
  }, [categoryId]);

  return (
    <div className="parent">
      <Header />
      <CategoryHeader />
      <div className="hero">
        <div className="subcategory-container">
          <p className="category-main-title">{categoryName}</p>
          {subcategories.map((item) => (
            <ul className="subcategory-list" key={item.id}>
              <Link
                to={`/${categoryName.toLowerCase()}/${item.name.toLowerCase()}`}
                className="subcategory-name"
              >
                {item.name}
              </Link>
            </ul>
          ))}
        </div>
        <div className="services-container">
          <h1>{categoryName}</h1>
          {loading ? (
            <Loader msg="Loading services" format="medium" />
          ) : (
            data.map((item) => <p key={item.id}>{item.name}</p>)
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;
