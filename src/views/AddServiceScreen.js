import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// Components
import Header from '../components/headers/Header';
import Form from 'react-bootstrap/Form';
// React-hook-form (used for validation)
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
const AddServiceScreen = ({ categories, userId, username, token }) => {
  const [name, setName] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState(1);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePlaceholder, setImagePlaceholder] = useState(null);
  const { register, handleSubmit, errors } = useForm();
  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category_id', selectedCategory);
    formData.append('user_id', userId);
    formData.append('subcategory_id', selectedSubcategory);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('username', username);
    const res = await axios.post('http://localhost:8000/services', formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status == 200) {
      toast.success('Service created successfully', {
        style: { backgroundColor: '#1cbe88' },
      });
    } else {
      toast.error('Service creation failed');
    }
  };
  const handleFileUpload = (e) => {
    setImagePlaceholder(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  return (
      <div className='parent'>
        <Header />
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
        <h1>Add a product</h1>
        <div className='hero'>
          <div style={{ width: '30%' }}>
            <img
                src={imagePlaceholder}
                style={{ height: '60%', width: '100%', objectFit: 'contain' }}
            />
          </div>
          <div style={{ width: '70%', marginLeft: 20 }}>
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
              <Form.Label>Product name</Form.Label>
              <Form.Group controlId='formBasicName'>
                <Form.Control
                    type='text'
                    name='name'
                    placeholder='Product description'
                    ref={register({ required: true })}
                    onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              {errors.name && (
                  <p className='error-message'>This field is required</p>
              )}
              <Form.Group controlId='formBasicCategory'>
                <Form.Label>Product category</Form.Label>
                <Form.Control
                    as='select'
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    custom
                >
                  {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='formBasicCategory'>
                <Form.Label>Product subcategory</Form.Label>
                <Form.Control
                    as='select'
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    custom
                >
                  {categories
                      .filter((c) => c.id == selectedCategory)[0]
                      .subcategories.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                      ))}
                </Form.Control>
              </Form.Group>
              <Form.Label>Product price</Form.Label>
              <Form.Group controlId='formBasicPrice'>
                <Form.Control
                    type='number'
                    name='price'
                    placeholder='Product price'
                    ref={register({ required: true })}
                    onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              {errors.price && (
                  <p className='error-message'>This field is required</p>
              )}
              <Form.Label>Product description</Form.Label>
              <Form.Group controlId='formBasicDescription'>
                <Form.Control
                    type='text'
                    name='description'
                    placeholder='Product description'
                    ref={register({ required: true })}
                    onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              {errors.description && (
                  <p className='error-message'>This field is required</p>
              )}
              <Form.Group controlId='formBasicImage'>
                <Form.File controlId='formBasicImage'>
                  <Form.Control
                      type='file'
                      name='price'
                      placeholder='Product description'
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
      </div>
  );
};
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  username: state.auth.user.username,
  userId: state.auth.user.id,
  token: state.auth.token,
});
export default connect(mapStateToProps)(AddServiceScreen)