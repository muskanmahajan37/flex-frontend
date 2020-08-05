import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import '../style/service.css';

// Components
import Header from '../components/headers/Header';
import CategoryHeader from '../components/headers/CategoryHeader';
import Footer from '../components/headers/Footer';
import Loader from '../components/Loader';
import Service from '../components/service-components/Service';
import Paginate from '../components/Pagination';

// React-router
import { Link } from 'react-router-dom';

const CategoryScreen = ({ location }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
                to={{
                  pathname: `/categories/${categoryName.toLowerCase()}/${item.name.toLowerCase()}`,
                  state: {
                    categoryId,
                    categoryName,
                    categoryDescription,
                    subcategoryID: item.id,
                  },
                }}
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
            <>
              <div className='inner-service-container'>
                {currentItems.map((item) => (
                  <Service
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    username={item.username}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </div>
              <Paginate
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
              />
            </>
          )}

        </div>


      </div>
      <div className={'ff'}>
        <div className={'Foot'}>
          <Footer/>

        </div>
      </div>

    </div>


  );
};

export default CategoryScreen;
