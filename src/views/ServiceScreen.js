import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

// Styling
import '../style/service.css';

// Components
import Header from '../components/headers/Header';
import CategoryHeader from '../components/headers/CategoryHeader';
import Loader from '../components/Loader';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

// Redux
import { connect } from 'react-redux';

// React-router
import { Link } from 'react-router-dom';

const ServiceScreen = ({ location: { state }, token }) => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(false);
  const { id, username } = state;

  const makePayment = async (token) => {
    await axios.post('http://localhost:8004/payments', {
      token,
      service,
    });
  };

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
            <div className='service-name-div'>
            <h1 className='service-name-h1'>{service.name}</h1>
            </div>
            {/*<Link to={`/${username}`}>{service.username}</Link>*/}
            <br />
            <div>
            <img
              src={`http://localhost:8000/images/${service.image}`}
              alt={'Profile'}
              className='current-service-image' />
            </div>
          </div>
          <div className='gig-right-container'>
            <div className='container'>
              <div className='service-name-div-1'>
                <h1 className='service-description'>Service Description</h1>
              </div>
              <div className="product-details">
                <p>{service.description}</p>
                <p>€{service.price}</p>
                <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    token={makePayment}
                    name={`Buy ${service.name}`}
                    amount={service.price * 100}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(ServiceScreen);
