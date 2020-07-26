import React, { useState } from 'react';

// Styling
import '../../style/home.css';

// Components
import Header from '../../components/headers/Header';
import CategoryHeader from '../../components/headers/CategoryHeader';
import Paginate from '../../components/Pagination';
import Service from '../../components/service-components/Service';

// Redux
import { connect } from 'react-redux';

const AuthHomeScreen = ({ services }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='parent'>
      <Header />
      <CategoryHeader />
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
        totalItems={services.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  services: state.services.services,
});

export default connect(mapStateToProps)(AuthHomeScreen);
