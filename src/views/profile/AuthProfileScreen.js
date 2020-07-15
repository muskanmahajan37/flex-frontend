import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styling
import '../../style/profile.css';

// Components
import Header from '../../components/headers/Header';
import Loader from '../../components/Loader';

// Redux
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// React-router
import { Link } from 'react-router-dom';

const AuthProfileScreen = ({ match, userId }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userServices, setUserServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { params } = match;
  const { user } = params;

  useEffect(() => {
    const fetchUserByID = async () => {
      setLoading(true);
      await axios.get(`/profile/${user}`).then((res) => {
        setCurrentUser(res.data);
      });
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
            <div className='gigs-services-container'>
              {currentUser.id == userId ? (
                loading ? (
                  <div className='center-container'>
                    <Loader />
                  </div>
                ) : userServices.length == 0 ? (
                  <div className='center-container'>
                    <h1 className='center-container-description'>
                      You don't have any services! Add some
                    </h1>
                    <Link to={`/${user}/services/new`}>
                      <Button
                        className='center-container-button'
                        variant='success'
                      >
                        Add service
                      </Button>
                    </Link>
                  </div>
                ) : (
                  userServices.map((service) => (
                    <Card>
                      <Card.Img
                        src={`http://localhost:8000/${service.image}`}
                      />
                      <Card.Text>{service.title}</Card.Text>
                    </Card>
                  ))
                )
              ) : loading ? (
                <div className='center-container'>
                  <Loader />
                </div>
              ) : userServices.length == 0 ? (
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
  userId: state.auth.user.id,
});

export default connect(mapStateToProps)(AuthProfileScreen);
