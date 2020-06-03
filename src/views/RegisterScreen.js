import React, { useState } from 'react';

// Styling
import '../style/register.css';

// Components
import Form from 'react-bootstrap/Form';

// React-router
import { Redirect, withRouter, Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { register as registerAPI } from '../store/auth/thunks';

// React-hook-form (used for validation)
import { useForm } from 'react-hook-form';

const RegisterScreen = ({ registerAPI, isAuthenticated }) => {
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassowrd] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const handleRegister = () => {
    const newUser = {
      name,
      username,
      email,
      password,
      password_confirmation: confirmPassword,
    };
    registerAPI(newUser);
  };

  const validateConfirmPassword = () => {
    if (password === confirmPassword) {
      return true;
    }

    return false;
  };

  return (
    <div className='wrapper'>
      {isAuthenticated ? (
        <Redirect to='/' />
      ) : (
        <>
          <div className='second-half'>
            <p className='welcome-text'>Welcome to</p>
            <p className='flex-text'>Frelance Expert</p>
            <div className='white-line' />
            <p className='desc-text'>Freelance platform</p>
          </div>
          <div className='first-half'>
            <p className='register-text'>Register</p>
            <div className='form-wrapper'>
              <Form onSubmit={handleSubmit(handleRegister)}>
                <Form.Group controlId='name'>
                  <input
                    name='name'
                    ref={register({
                      required: true,
                      minLength: 2,
                    })}
                    placeholder='Name'
                    className='custom-input'
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                {errors.name && errors.name.type === 'required' ? (
                  <p className='error-message'>This field is required</p>
                ) : errors.name && errors.name.type === 'minLength' ? (
                  <p className='error-message'>Enter a valid name</p>
                ) : (
                  <p className='hidden-message'>!</p>
                )}
                <Form.Group controlId='username'>
                  <input
                    name='username'
                    ref={register({
                      required: true,
                      minLength: 3,
                    })}
                    placeholder='username'
                    className='custom-input2'
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                {errors.name && errors.name.type === 'required' ? (
                  <p className='error-message'>This field is required</p>
                ) : errors.name && errors.name.type === 'minLength' ? (
                  <p className='error-message'>Enter a valid name</p>
                ) : (
                  <p className='hidden-message'>!</p>
                )}
                <Form.Group controlId='formBasicEmail'>
                  <input
                    name='email'
                    ref={register({
                      required: true,
                      pattern: /^\S+@\S+\.\S+$/,
                    })}
                    placeholder='Email'
                    className='custom-input2'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                {errors.email && errors.email.type === 'required' ? (
                  <p className='error-message'>This field is required</p>
                ) : errors.email && errors.email.type === 'pattern' ? (
                  <p className='error-message'>Enter a valid email</p>
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
                <Form.Group controlId='formBasicPasswordConfirmation'>
                  <input
                    type='password'
                    name='confirmPassword'
                    ref={register({
                      required: true,
                      validate: validateConfirmPassword,
                    })}
                    placeholder='Confirm passowrd'
                    className='custom-input2'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                {errors.confirmPassword &&
                errors.confirmPassword.type === 'required' ? (
                  <p className='error-message'>This field is required</p>
                ) : errors.confirmPassword &&
                  errors.confirmPassword.type === 'validate' ? (
                  <p className='error-message'>Passwords do not match</p>
                ) : (
                  <p className='hidden-message'>!</p>
                )}
                <Link to='/login' className='have-account'>
                  <p className='have-account-paragrah'>
                    Already have an account?
                  </p>
                </Link>
                <button className='register-button' type='submit'>
                  Submit
                </button>
              </Form>
            </div>
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
  registerAPI: (user) => dispatch(registerAPI(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterScreen));
