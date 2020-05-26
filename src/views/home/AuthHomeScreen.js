import React from "react";

// Styling
import "../../style/home.css";

// Components
import Header from "../../components/headers/Header";
import CategoryHeader from "../../components/headers/CategoryHeader";

// Redux
import { connect } from "react-redux";

const AuthHomeScreen = ({ userId }) => {
  return (
    <div className="parent">
      <Header />
      <CategoryHeader />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

export default connect(mapStateToProps)(AuthHomeScreen);
