import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import '../../style/profile.css';

// Components
import Header from '../../components/headers/Header';
import Loader from '../../components/Loader';

// Redux
import { connect } from 'react-redux';

const AuthProfileScreen = ({ match }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { params } = match;
  const { user } = params;

  useEffect(() => {
    const fetchUserByID = async () => {
      setLoading(true);
      await axios
        .get(`/profile/${user}`)
        .then((res) => setCurrentUser(res.data));
      setLoading(false);
    };
    fetchUserByID();
  }, [user]);

  return (
    <div className='parent'>
      <Header />
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
              <p className='current-user-username'>{currentUser.username}</p>
            </div>
          )}
          <div className='gigs-container'>
            <div className='gigs-header'>
              <p>Active services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AuthProfileScreen);
