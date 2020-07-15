import React from 'react';

// Styling
import '../style/notfound.css';

// Components
import Header from '../components/headers/Header';

// Redux
import { connect } from 'react-redux';

const NotFoundScreen = ({ isAuthenticated }) => {
  return (
    <div className='parent'>
      <Header />
      <div className='center'>
        <h1>You're lost buddy!</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(NotFoundScreen);
