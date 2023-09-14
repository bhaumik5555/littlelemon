import React from 'react';
import './payment.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    cardHolderName: Yup.string()
    .required('Required'),
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, 'Invalid card number')
      .required('Required'),
    expiryDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date (MM/YY)')
      .required('Required'),
    cvv: Yup.string()
      .matches(/^\d{3}$/, 'Invalid CVV')
      .required('Required'),
  });

function Payment() {
    const handleSubmit = (values) => {
        // Implement payment processing logic here using values
        console.log('Payment form submitted with values:', values);
        alert('Thank you for your submission. Your bookings have been confirmed.')
      };

    return (
        <div>
            <h1>Payment Page</h1>
            <Formik
                initialValues={{
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid }) => (
                <Form className='form-class'>
                    <div className="form-group">
                        <label htmlFor="cardHolderName">Card Holder Name:</label>
                        <Field
                            type="text"
                            id="cardHolderName"
                            name="cardHolderName"
                            placeholder="John Doe"
                        />
                        <ErrorMessage name="cardHolderName" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number:</label>
                        <Field
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                        />
                        <ErrorMessage name="cardNumber" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <Field
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                        />
                        <ErrorMessage name="expiryDate" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cvv">CVV:</label>
                        <Field type="text" id="cvv" name="cvv" placeholder="123" />
                        <ErrorMessage name="cvv" component="div" className="error" />
                    </div>

                    <button type="submit" id='submit-button' disabled={!isValid}>Submit Payment</button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default Payment;
