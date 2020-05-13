import React, { useState, useEffect } from "react";
import axios from "axios";

// Styling
import "../../style/home.css";

// Components
import Header from "../../components/headers/Header";
import Card from "../../components/Card";

// Redux
import { connect } from "react-redux";

const AuthHomeScreen = ({ userId }) => {
  return (
    <div className="parent">
      <Header />
      <h1>Auth home screen</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

export default connect(mapStateToProps)(AuthHomeScreen);
