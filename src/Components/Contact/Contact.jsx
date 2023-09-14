import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Box, Grid } from '@mui/material';
import Profile from '../Profile/Profile'
import Image1 from '../../assets/Images/Profile Pictures/1.jpeg'
import Image2 from '../../assets/Images/Profile Pictures/2.jpeg'
import Image3 from '../../assets/Images/Profile Pictures/3.jpeg'
import './contact.css'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(20, 'Max 20 characters').required('Required'),
  lastName: Yup.string().max(15, 'Max 15 characters').required('Required'),
  // email: Yup.string().email('Invalid email address').required('Required'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email address'
    )
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
    .required('Required'),
  textArea: Yup.string().max(50, 'Max 50 characters'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  textArea: '',
};



function Contact() {

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., make an API request
    alert('Thank you for your submission. Have a nice day.');
    console.log('Form submitted with values:', values);
  };

  return (
    <div>
      <Box>
        <Grid container spacing={1}>
          <Grid item xl={4} md={6} xs={12}>
              <Profile name="ABC" introduction='Head Chef' image={Image1} />
          </Grid>
          <Grid item xl={4} md={6} xs={12}>
              <Profile name="XYZ" introduction='Supporting Chef' image={Image2} />
          </Grid>
          <Grid item xl={4} md={6} xs={12}>
              <Profile name="PQR" introduction='Helper' image={Image3} />
          </Grid>
        </Grid>
      </Box>

      <div className='form'>
        <h2>Please leave a inquiry here.</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="firstName">
                  First Name<span className="required">*</span>:
                </label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="lastName">
                  Last Name<span className="required">*</span>:
                </label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="email">
                  Email<span className="required">*</span>:
                </label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Field type="text" id="phoneNumber" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="textArea">
                  Text Area<span className="required">*</span>:
                </label>
                <Field as="textarea" id="textArea" name="textArea" />
                <ErrorMessage name="textArea" component="div" className="error" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
}

export default Contact;