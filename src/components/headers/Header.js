import React from "react";

// Components
import AuthHeader from "./AuthHeader";
import GuestHeader from "./GuestHeader";

import { connect } from "react-redux";

const Header = ({ isAuthenticated }) =>
  isAuthenticated ? <AuthHeader /> : <GuestHeader />; // Here i render the header depending if the user is logged in

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
