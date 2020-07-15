import React from 'react';

// Components
import GuestHomeScreen from './home/GuestHomeScreen'; // If you're not logged in this screen will render
import AuthHomeScreen from './home/AuthHomeScreen'; // If you're logged in this screen will render

// Redux
import { connect } from 'react-redux';

const HomeScreen = ({ isAuthenticated }) => {
  return isAuthenticated ? <AuthHomeScreen /> : <GuestHomeScreen />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(HomeScreen);
