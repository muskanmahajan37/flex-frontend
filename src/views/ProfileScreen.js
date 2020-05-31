import React, { useState, useEffect } from 'react';

// Styling
import '../style/profile.css';

// Components
import Header from '../components/headers/Header';
import CategoryHeader from '../components/headers/CategoryHeader';

const ProfileScreen = () => {
  return (
    <div className='parent'>
      <Header />
      <CategoryHeader />
      <div className='hero'>
        <div className='parent-wrapper'>
          <div className='profile-container'>
            <img src={``} alt={'Profile'} />
          </div>
          <div className='gigs-container'></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
