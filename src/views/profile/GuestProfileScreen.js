import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import '../../style/profile.css';

// Components
import CategoryHeader from '../../components/headers/CategoryHeader';
import Header from '../../components/headers/Header';
import Loader from '../../components/Loader';

// Redux
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

const GuestProfileScreen = ({ match }) => {
  const [currentUser, setUser] = useState({});
  const [userServices, setUserServices] = useState([]);
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
  }, [user]);

  useEffect(() => {
    const fetchServicesByUser = async () => {
      setLoading(true);
      await axios
        .get(`/users/${currentUser.id}/services`)
        .then((res) => setUserServices(res.data));
      setLoading(false);
    };
    currentUser.id && fetchServicesByUser();
  }, [currentUser]);

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
              <p className='current-user-username'>{currentUser.username}</p>
            </div>
          )}
          <div className='gigs-container'>
            <div className='gigs-header'>
              <p>{currentUser.username}'s services</p>
            </div>
            <div className='gigs-services-container'>
              {loading ? (
                <div className='center-container'>
                  <Loader />
                </div>
              ) : userServices.length === 0 ? (
                <div className='center-container'>
                  <h1>This user has no services</h1>
                </div>
              ) : (
                userServices.map((service) => (
                  <Card>
                    <Card.Img src={`http://localhost:8000/${service.image}`} />
                    <Card.Text>{service.title}</Card.Text>
                  </Card>
                ))
              )}
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

export default connect(mapStateToProps)(GuestProfileScreen);
