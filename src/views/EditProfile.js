import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

// Styling
import '../style/profile.css';

// Components
import Header from '../components/headers/Header';
import Footer from '../components/headers/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// React-hook-form
import { useForm } from 'react-hook-form';

// Redux
import { connect } from 'react-redux';
import { editUser } from '../store/auth/thunks';

// React-router
import { Redirect } from 'react-router-dom';

const EditProfile = ({ match, isAuthenticated, currentUser, editUser }) => {
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePlaceholder, setImagePlaceholder] = useState(null);

  const { params } = match;
  const { user } = params;

  const { register, handleSubmit, errors } = useForm();
  const handleFormSubmit = async () => {
    const data = {
      name,
      username,
      email,
      image,
    };

    const response = await editUser(data);
    if (response.type == 'EDIT_USER_SUCCESS') {
      toast.success('Profile edited successfully', {
        style: { backgroundColor: '#1cbe88' },
      });
    } else {
      toast.error('Something went wrong', {
        style: { backgroundColor: '#1cbe88' },
      });
    }
  };

  const handleFileUpload = (e) => {
    setImagePlaceholder(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  return !isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <div className='parent'>
      <Header />
      {user === currentUser.username ? (
        <>
          <ToastContainer
            position='top-right'
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <h1>Edit profile</h1>
          <div className='hero'>
            <div style={{ width: '30%' }}>
              <img
                src={imagePlaceholder}
                style={{ height: '60%', width: '100%', objectFit: 'contain' }}
                alt=''
              />
            </div>
            <div style={{ width: '70%', marginLeft: 20 }}>
              <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <Form.Label>Name</Form.Label>
                <Form.Group controlId='formBasicName'>
                  <Form.Control
                    type='text'
                    name='name'
                    value={currentUser.name}
                    placeholder='Name'
                    ref={register({ required: true })}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                {errors.name && (
                  <p className='error-message'>This field is required</p>
                )}
                <Form.Group controlId='formBasicUsername'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    name='username'
                    value={currentUser.username}
                    placeholder='Username'
                    ref={register({ required: true })}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                {errors.username && (
                  <p className='error-message'>This field is required</p>
                )}
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='text'
                    name='email'
                    value={currentUser.email}
                    placeholder='Email'
                    ref={register({
                      required: true,
                      pattern: /^\S+@\S+\.\S+$/,
                    })}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                {errors.email && errors.email.type === 'required' ? (
                  <p className='error-message'>This field is required</p>
                ) : (
                  errors.email &&
                  errors.email.type === 'pattern' && (
                    <p className='error-message'>Enter a valid email</p>
                  )
                )}
                <Form.Group controlId='formBasicImage'>
                  <Form.File controlId='formBasicImage'>
                    <Form.Control
                      type='file'
                      name='image'
                      ref={register({ required: true })}
                      onChange={handleFileUpload}
                    />
                  </Form.File>
                </Form.Group>
                <button className='login-button' type='submit'>
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </>
      ) : (
        <div className='flex'>
          <h1>401 Not authorized</h1>
        </div>
      )}
      <div className={'footer'}>
        <div className={'Foot'}>
          <Footer/>

        </div>
      </div>
    </div>

  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.user,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  editUser: (user) => dispatch(editUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
