import React, { useState } from 'react';

// Styling
import '../style/login.css';

// Components
import Form from 'react-bootstrap/Form';

// React-router
import { Redirect, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { login } from '../store/auth/thunks';

// React-hook-form (used for validation)
import { useForm } from 'react-hook-form';

const LoginScreen = ({ login, isAuthenticated }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassowrd] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    login(user);
  };

  return (
    <div className='wrapper'>
      {isAuthenticated ? (
        <Redirect to='/' />
      ) : (
        <>
          <div className='first-half'>
            <p className='login-text'>Sign In</p>
            <div className='form-wrapper'>
              <Form onSubmit={handleSubmit(handleLogin)}>
                <Form.Group controlId='formBasicEmail'>
                  <input
                    name='email'
                    ref={register({
                      required: true,
                      pattern: /^\S+@\S+\.\S+$/,
                    })}
                    placeholder='Email'
                    className='custom-input'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                {errors.email && errors.email.type === 'required' ? (
                  <p className='error-message'>This field is required</p>
                ) : errors.email && errors.email.type === 'pattern' ? (
                  <p className='error-message'>Enter a valid email address</p>
                ) : (
                  <p className='hidden-message'>!</p>
                )}
                <Form.Group controlId='formBasicPassword'>
                  <input
                    type='password'
                    name='password'
                    ref={register({ required: true })}
                    placeholder='Password'
                    className='custom-input2'
                    onChange={(e) => setPassowrd(e.target.value)}
                  />
                </Form.Group>
                {errors.password ? (
                  <p className='error-message'>This field is required</p>
                ) : (
                  <p className='hidden-message'>!</p>
                )}
                <p className='forgot-password'>Forgot password?</p>
                <button className='login-button' type='submit'>
                  Submit
                </button>
              </Form>
            </div>
          </div>
          <div className='second-half'>
            <p className='welcome-text'>Welcome to</p>
            <p className='flex-text'>Frelance Expert</p>
            <div className='white-line' />
            <p className='desc-text'>Freelance platform</p>
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginScreen));
