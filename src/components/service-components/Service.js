import React from 'react';

// Styling
import '../../style/service.css';

// React-Router
import { Link } from 'react-router-dom';

const Service = ({ name, username, description, price, image }) => {
  return (
    <div className='service-container'>
      <img
        className='service-image'
        src={`http://localhost:8000/images/${image}`}
        alt={'Profile'}
      />
      <div className="service-details-container">
        <Link to={`/${username}`} className='user-name'>
          {username}
        </Link>
        <p className='service-name'>{name}</p>
        <p className='service-price'>€{price}</p>
      </div>
    </div>
  );
};

export default Service;
