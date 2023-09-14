import React from 'react';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './reservation.css'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(20, 'Max 20 characters').required('Required'),
  lastName: Yup.string().max(15, 'Max 15 characters').required('Required'),
  numberOfGuests: Yup.number()
    .required('Required')
    .integer('Must be an integer')
    .min(1, 'Minimum 1 guest')
    .max(15, 'Maximum 15 guests'),
  timeHours: Yup.string().required('Required'),
  timeMinutes: Yup.string().required('Required'),
  // date: Yup.date()
  // .required('Required')
  // .min(new Date(), 'Please enter the correct date'),
  comment: Yup.string().max(50, 'Max 100 characters'),
  date: Yup.date()
  .required('Required')
  .test(
    'is-future-date',
    'Past dates are not allowed',
    function (value) {
      const currentDate = new Date();
      const selectedDate = new Date(value);
      // Compare the selected date to today's date
      return selectedDate > currentDate;
    }
  ),
  // timeHours: Yup.string()
  //   .required('Required')
  //   .when('date', {
  //     is: (date) => {
  //       const currentDate = new Date();
  //       const selectedDate = new Date(date);
  //       return selectedDate.toDateString() === currentDate.toDateString();
  //     },
  //     then: () => Yup.string().test(
  //       'is-future-time',
  //       'Past times are not allowed',
  //       function (value) {
  //         const currentDate = new Date();
  //         const selectedTime = new Date(
  //           `${this.parent.date} ${value}:${this.parent.timeMinutes}`
  //         );
  //         // Compare the selected time to the current time
  //         return selectedTime >= currentDate; // Use >= to include the current time
  //       }
  //     ),
  //   }),
  // timeMinutes: Yup.string().required('Required'),
});



const initialValues = {
  firstName: '',
  lastName: '',
  numberOfGuests: '',
  timeHours: '',
  timeMinutes: '',
  date: '',
  comment: '',
};

const Reservation = () => {
  const handleSubmit = (values) => {
    // Handle form submission here, e.g., make a reservation
    console.log('Form submitted with values:', values);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(Math.ceil(now.getMinutes() / 10) * 10).padStart(2, '0'); // Round minutes to the nearest 10
    return `${hours}:${minutes}`;
  };

  // Generate options for hours (00 to 23)
  const hourOptions = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));

  // Generate options for minutes (00, 10, 20, ..., 50)
  const minuteOptions = Array.from({ length: 6 }, (_, i) => String(i * 10).padStart(2, '0'));

  return (
  <>
    <h2>Table Reservation Form</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({isValid}) => (
        <Form className="form-class">
          <div className="form-group">
            <label htmlFor="firstName">
              First Name<span className="required">*</span>:
            </label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name<span className="required">*</span>:
            </label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="numberOfGuests">
              Number of Guests<span className="required">*</span>:
            </label>
            <Field type="number" id="numberOfGuests" name="numberOfGuests" />
            <ErrorMessage
              name="numberOfGuests"
              component="div"
              className="error"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">
              Date<span className="required">*</span>:
            </label>
            <Field type="date" id="date" name="date" min={getCurrentDate()}/>
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="timeHours">
              Time<span className="required">*</span>:
            </label>
            <div className="time-select">
              <Field as="select" id="timeHours" name="timeHours" min={getCurrentTime()}>
                <option value="">Hour</option>
                {hourOptions.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </Field>
              <Field as="select" id="timeMinutes" name="timeMinutes">
                <option value="">Minute</option>
                {minuteOptions.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="timeHours" component="div" className="error" />
            <ErrorMessage name="timeMinutes" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <Field as="textarea" id="comment" name="comment" />
            <ErrorMessage name="comment" component="div" className="error" />
          </div>

          <button type="submit" id='reservation-button' disabled={!isValid}>
            <LinkContainer to="/payment">
              <Nav.Link>Proceed to Payment</Nav.Link>
            </LinkContainer>
          </button>
        </Form>
      )}
    </Formik>
  </>
  )
}

export default Reservation;