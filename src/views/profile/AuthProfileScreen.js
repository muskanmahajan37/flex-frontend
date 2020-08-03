import React, { useState, useEffect } from "react";
import axios from "axios";

// Styling
import "../../style/profile.css";

// Components
import Header from "../../components/headers/Header";
import Loader from "../../components/Loader";

// Redux
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// React-router
import { Link } from "react-router-dom";

const AuthProfileScreen = ({ match, loggedInUser }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userServices, setUserServices] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  const [userEducation, setUserEducation] = useState([]);
  const [userLanguage, setUserLanguage] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(false);
  const { params } = match;
  const { user } = params;



  useEffect(() => {
    const fetchUserByID = async () => {
      setUserLoading(true);
      await axios.get(`/profile/${user}`).then((res) => {
        setCurrentUser(res.data);
      });
      setUserLoading(false);
    };
    user !== loggedInUser.username && fetchUserByID();
  }, [user, loggedInUser]);

  useEffect(() => {
    const fetchServicesByUser = async () => {
      setServicesLoading(true);
      await axios
        .get(`/users/${loggedInUser.id}/services`)
        .then((res) => setUserServices(res.data));
      setServicesLoading(false);
    };
    fetchServicesByUser();
  }, [currentUser, loggedInUser]);

  useEffect(() => {
    const fetchUserEducation = async () => {
      setServicesLoading(true);
      await axios
          .get(`/users/${loggedInUser.id}/educations`)
          .then((res) => setUserEducation(res.data));
      setServicesLoading(false);
    };
    fetchUserEducation();
  }, [currentUser, loggedInUser]);

  useEffect(() => {
    const fetchUserSkills = async () => {
      setServicesLoading(true);
      await axios
          .get(`/users/${loggedInUser.id}/skills`)
          .then((res) => setUserSkills(res.data));
      setServicesLoading(false);
    };
    fetchUserSkills();
  }, [currentUser, loggedInUser]);

  useEffect(() => {
    const fetchUserLanguage = async () => {
      setServicesLoading(true);
      await axios
          .get(`/users/${loggedInUser.id}/languages`)
          .then((res) => setUserLanguage(res.data));
      setServicesLoading(false);
    };
    fetchUserLanguage();
  }, [currentUser, loggedInUser]);


  return (
    <div className="parent">
      <Header />
      <div className="hero">
        <div className="parent-wrapper">
          {user === loggedInUser.username ? (
            <div className="profile-container">
              <img
                src={`/user/${loggedInUser.image}`}
                alt={"Profile"}
                className="current-user-image"
              />
              <p className="current-user-username">{loggedInUser.username}</p>
              <Link
                to={{
                  pathname: `/${loggedInUser.username}/profile/edit`,
                }}
                className="edit-profile-button"
              >
                Edit profile
              </Link>
              <br/>
              <br/>
              <br/>
              <hr className="hr-line"/>

              <p className='education-text'>Skills</p>
              <ul className="skill-list">
                {userSkills.map(function(name, index){
                  return <li
                      key={ index }>{name.name}
                  </li>;
                })}
              </ul>
              <hr className='hr-line'/>
              <p className='education-text'>Education</p>
              <ul className="skill-list">
                {userEducation.map(function(education, index){
                  return <li
                      key={ index }>{education.name}
                  </li>;
                })}
              </ul>
              <hr className='hr-line'/>
              <p className='education-text'>Languages</p>
              <ul className="skill-list">
                {userLanguage.map(function(language, index){
                  return <li
                      key={ index }>{language.name}
                  </li>;
                })}
              </ul>

            </div>
          ) : userLoading ? (
            <div className="profile-container-loading">
              <Loader format="medium" msg="Loading" />
            </div>
          ) : (
            <div className="profile-container">
              <img
                src={`/user/${currentUser.image}`}
                alt={"Profile"}
                className="current-user-image"
              />
              <p className="current-user-username">{currentUser.username}</p>
            </div>
          )}
          <div className="gigs-container">
            <div className="gigs-header">
              <p className='active-services'>Active services</p>
            </div>
            <div className="gigs-services-container">
              {servicesLoading ? (
                <div className="center-container">
                  <Loader />
                </div>
              ) : userServices.length === 0 ? (
                currentUser.id === loggedInUser.id ? (
                  <div className="center-container">
                    <h1 className="center-container-description">
                      You don't have any services! Add some
                    </h1>
                    <Link to={`/${user}/services/new`}>
                      <Button
                        className="center-container-button"
                        variant="success"
                      >
                        Add service
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="center-container">
                    <h1>This user has no services</h1>
                  </div>
                )
              ) : (
                userServices.map((service, index) => (
                  <Card key={index}>
                    <Card.Img
                      src={`http://localhost:8000/images/${service.image}`}
                    />
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
  loggedInUser: state.auth.user,
});

export default connect(mapStateToProps)(AuthProfileScreen);
