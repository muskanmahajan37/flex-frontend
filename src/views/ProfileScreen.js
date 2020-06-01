import React from 'react';

// Styling
import '../style/profile.css';

// View
import AuthProfileScreen from './profile/AuthProfileScreen';
import GuestProfileScreen from './profile/GuestProfileScreen';

// Redux
import { connect } from 'react-redux';

const ProfileScreen = ({ isAuthenticated, match }) =>
  isAuthenticated ? (
    <AuthProfileScreen match={match} />
  ) : (
    <GuestProfileScreen match={match} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(ProfileScreen);
