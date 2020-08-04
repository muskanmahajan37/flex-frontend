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
            <hr/>
            <div><h3 className="similar-services">SIMILAR SERVICES</h3></div>
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" height="230.77px" src={`http://localhost:8000/images/web-4.jpg`}/>
                        <Card.Body>
                            <Card.Title>Full stack Developer</Card.Title>
                            <Card.Text>
                                I will develop your website front and back-end based on your requirements
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Active in last 2 months </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={`http://localhost:8000/images/wordpress-2.jpg`}/>
                        <Card.Body>
                            <Card.Title>Wordpress Developer</Card.Title>
                            <Card.Text>
                                I will develop your website using wordpress and other plugins as necessary from the
                                client
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Active in last 3 weeks</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={`http://localhost:8000/images/react-native.jpg`}/>
                        <Card.Body>
                            <Card.Title>React Native Developer</Card.Title>
                            <Card.Text>
                                I will build mobile applications using react-native framework. Lots of experience
                                with small/large projects already delivered
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Active in last 10 days</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <Carousel >
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={`http://localhost:8000/images/react-native.jpg`}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={`http://localhost:8000/images/swift-1.jpg`}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="500px"
                            className="d-block w-100"
                            src={`http://localhost:8000/images/web-1.jpg`}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className={'footer'}>
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
