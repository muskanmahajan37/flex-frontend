import React, { useState } from 'react';

// Components
import Header from '../components/headers/Header';
import Loader from '../components/Loader';
import Form from 'react-bootstrap/Form';

// React-hook-form (used for validation)
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const AddServiceScreen = ({ categories }) => {
  const [name, setName] = useState(null);
  const [password, setPassowrd] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState(1);
  const [price, setPrice] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const handleFormSubmit = () => {
    const product = {
      name,
      password,
    };
  };

  return (
    <div className='parent'>
      <Header />
      <div className='hero'>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <Form.Group controlId='formBasicName'>
            <input
              name='name'
              ref={register({ required: true })}
              placeholder='Product name'
              className='custom-input'
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
          <Form.Group controlId='formBasicPrice'>
            <input
              type='number'
              name='price'
              ref={register({ required: true })}
              placeholder='Product price'
              className='custom-input'
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          {errors.number && (
            <p className='error-message'>This field is required</p>
          )}
          <button className='login-button' type='submit'>
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(AddServiceScreen);
