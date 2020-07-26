import React, { useState } from 'react';

// Styling
import '../../style/home.css';

// Components
import Header from '../../components/headers/Header';
import CategoryHeader from '../../components/headers/CategoryHeader';
import Card from '../../components/Card';
import Paginate from '../../components/Pagination';
import Service from '../../components/service-components/Service';

// Redux
import { connect } from 'react-redux';

const GuestHomeScreen = ({ services }) => {
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
      <div className='guest-hero'>
        <div className='hero-wrapper'>
          <p className='moto'>Find your perfect solution</p>
          <input
            type='text'
            className='search-input'
            placeholder='Try "Software Developer"'
          />
        </div>
        <img
          src={require('../../assets/images/img.png')}
          className='hero-image'
        />
      </div>
      <div className='second'>
        <p className='services-text'>Popular services we ofer:</p>
        <div className='card-wrapper'>
          <Card
            cardImage={require('../../assets/images/web-design.jpg')}
            description='Develop Your Website'
            name='Web Design'
          />
          <Card
            cardImage={require('../../assets/images/logo-design.jpg')}
            description='Build Your Brand'
            name='Logo Design'
          />
          <Card
            cardImage={require('../../assets/images/seo.jpg')}
            description='Unlock Growth Online'
            name='SEO'
          />
          <Card
            cardImage={require('../../assets/images/translation.jpg')}
            description='Go Global'
            name='Translation'
          />
          <Card
            cardImage={require('../../assets/images/voice-over.jpg')}
            description='Share your message'
            name='Voice Over'
          />
        </div>
      </div>
      <div className='second'>
        <p style={{ fontSize: 24 }}>Some of the services we provide</p>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  services: state.services.services,
});

export default connect(mapStateToProps)(GuestHomeScreen);
