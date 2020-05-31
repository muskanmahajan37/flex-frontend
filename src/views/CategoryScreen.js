import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import '../style/service.css';

// Components
import Header from '../components/headers/Header';
import CategoryHeader from '../components/headers/CategoryHeader';
import Loader from '../components/Loader';
import Service from '../components/service-components/Service';

// React-router
import { Link } from 'react-router-dom';

const CategoryScreen = ({ location }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = location;
  const {
    categoryId,
    categoryName,
    categoryDescription,
    subcategories,
  } = state;

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
    <div className='parent'>
      <Header />
      <CategoryHeader />
      <div className='hero'>
        <div className='subcategory-container'>
          <p className='category-main-title'>{categoryName}</p>
          {subcategories.map((item) => (
            <ul className='subcategory-list' key={item.id}>
              <Link
                to={`/categories/${categoryName.toLowerCase()}/${item.name.toLowerCase()}`}
                className='subcategory-name'
              >
                {item.name}
              </Link>
            </ul>
          ))}
        </div>
        <div className='services-container'>
          <h1>{categoryName}</h1>
          <p className='category-main-description'>{categoryDescription}</p>
          {loading ? (
            <div className='center-loader'>
              <Loader msg='Loading services' format='medium' />
            </div>
          ) : (
            <div className='inner-service-container'>
              {data.map((item) => (
                <Service
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;
