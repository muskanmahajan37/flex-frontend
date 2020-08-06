import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
// Styling
import '../style/service.css';
// Components
import Header from '../components/headers/Header';
import CategoryHeader from '../components/headers/CategoryHeader';
import Footer from "../components/headers/Footer";

import Loader from '../components/Loader';
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
// Redux
import {connect} from 'react-redux';
// React-router

const ServiceScreen = ({location: {state}, token}) => {
    const [service, setService] = useState({});
    const [services, setAllServices] = useState({});
    const [loading, setLoading] = useState(false);
    const {id, username} = state;

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


    useEffect(() => {
        const fetchAllServices = async () => {
            setLoading(true);
            await axios
                .get(`/services`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => setAllServices(res.data));
            setLoading(false);
        };
        fetchAllServices();
    }, [username]);
    return (
        <div className='parent'>
            <Header/>
            <CategoryHeader/>
            {loading ? (
                <div className='gig-container-loading'>
                    <Loader format='medium' msg='Loading service...'/>
                </div>
            ) : (
                <div className='gig-container'>
                    <div className='gig-left-container'>
                        <div className='service-name-div'>
                            <h1 className='service-name-h1'>{service.name}</h1>
                        </div>
                        {/*<Link to={`/${username}`}>{service.username}</Link>*/}
                        <br/>
                        <div>
                            <img
                                src={`http://localhost:8000/images/${service.image}`}
                                alt={'Profile'}
                                className='current-service-image'/>
                        </div>
                    </div>
                    <div className='gig-right-container'>
                        <div className='container'>
                            <div className='service-name-div-1'>
                                <h1 className='service-description'>Service Description</h1>
                            </div>
                            <div className="product-details">
                                <p id="service-description-text">{service.description}</p>
                                <p id="service-description-price">€{service.price}</p>
                                <div id="stripe-check-out">
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
                </div>
            )}
            <hr/>
            <div><h3 className="similar-services">SIMILAR SERVICES</h3></div>
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={`http://localhost:8000/images/web-4.jpg`}/>
                        <Card.Body>
                            <Card.Title>Full stack Developer</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={`http://localhost:8000/images/wordpress-2.jpg`}/>
                        <Card.Body>
                            <Card.Title>Wordpress Developer</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={`http://localhost:8000/images/react-native.jpg`}/>
                        <Card.Body>
                            <Card.Title>React Native Developer</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <div>
            </div>
            <div className={'right-foot'}>
                <div className={'Foot'}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    token: state.auth.token,
});

export default connect(mapStateToProps)(ServiceScreen);
