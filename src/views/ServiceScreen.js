import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import '../style/service.css';

// Components
import Header from '../components/headers/Header';
import CategoryHeader from '../components/headers/CategoryHeader';
import Loader from '../components/Loader';

// Redux
import { connect } from 'react-redux';

// React-router
import { Link } from 'react-router-dom';

const ServiceScreen = ({ location: { state }, token }) => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(false);
  const { id, username } = state;

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      await axios
        .get(`/services/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setService(res.data));
      setLoading(false);
    };
    fetchService();
  }, [username]);

  return (
    <div className='parent'>
      <Header />
      <CategoryHeader />
      {loading ? (
        <div className='gig-container-loading'>
          <Loader format='medium' msg='Loading service...' />
        </div>
      ) : (
        <div className='gig-container'>
          <div className='gig-left-container'>
            <h1>{service.name}</h1>
            <Link to={`/${username}`}>{service.username}</Link>
            <br />
            <img
              src={`http://localhost:8000/images/${service.image}`}
              alt={'Profile'}
              className='current-service-image'
            />
          </div>
          <div className='gig-right-container'></div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(ServiceScreen);
