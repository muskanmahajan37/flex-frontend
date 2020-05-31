import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import '../style/profile.css';

// Components
import Header from '../components/headers/Header';
import CategoryHeader from '../components/headers/CategoryHeader';
import Loader from '../components/Loader';

const ProfileScreen = ({ match }) => {
  const [currentUser, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { params } = match;
  const { user } = params;

  useEffect(() => {
    const fetchUserByID = async () => {
      setLoading(true);
      await axios.get(`/profile/${user}`).then((res) => setUser(res.data));
      setLoading(false);
    };
    fetchUserByID();
  }, []);

  return (
    <div className='parent'>
      <Header />
      <CategoryHeader />
      <div className='hero'>
        <div className='parent-wrapper'>
          {loading ? (
            <div className='profile-container-loading'>
              <Loader format='medium' msg='Loading' />
            </div>
          ) : (
            <div className='profile-container'>
              <img
                src={`/user/${currentUser.image}`}
                alt={'Profile'}
                className='current-user-image'
              />
              <p className="current-user-username">{currentUser.username}</p>
            </div>
          )}
          <div className='gigs-container'></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
