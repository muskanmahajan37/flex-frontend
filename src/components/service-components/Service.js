import React from 'react';

// Styling
import '../../style/service.css';

// React-Router
import { Link } from 'react-router-dom';

const Service = ({ id, name, username, onClick, price, image }) => {
  let nameWithDashes = name.replace(/\s+/g, '-').toLowerCase();

  return (
    <Link
      to={{
        pathname: `/${username}/${nameWithDashes}`,
        state: {
          id,
          username,
        },
      }}
      onClick={onClick}
      className='service-container'
    >
      <img
        className='service-image'
        src={`http://localhost:8000/images/${image}`}
        alt={'Profile'}
      />
      <div className='service-details-container'>
        <Link to={`/${username}`} className='user-name'>
          {username}
        </Link>
        <p className='service-name'>{name}</p>
        <p className='service-price'>€{price}</p>
      </div>
    </Link>
  );
};

export default Service;
