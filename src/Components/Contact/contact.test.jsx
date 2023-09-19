import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import * as Yup from 'yup';
import Contact from './Contact';


// Define the same validation schema and initial values for testing
const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(20, 'Max 20 characters').required('Required'),
  lastName: Yup.string().max(15, 'Max 15 characters').required('Required'),
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

test('Form renders without errors', () => {
  const { getByText, getByLabelText } = render(
    <Contact initialValues={initialValues} validationSchema={validationSchema} />
  );

  // Check if the form elements are rendered
  getByLabelText('First Name*:');
  getByLabelText('Last Name*:');
  getByLabelText('Email*:');
  getByLabelText('Phone Number:');
  getByLabelText('Text Area*:');
  getByText('Submit');
});

test('Submitting the form with valid data', async () => {
  const { getByLabelText, getByText } = render(
    <Contact initialValues={initialValues} validationSchema={validationSchema} />
  );

  // Capture the console.log output
  let consoleOutput = [];
  const originalConsoleLog = console.log;
  console.log = (message) => {
    consoleOutput.push(message);
    originalConsoleLog(message); // Ensure the message is still logged to the console
  };

  // Fill out the form with valid data
  fireEvent.change(getByLabelText('First Name*:'), { target: { value: 'John' } });
  fireEvent.change(getByLabelText('Last Name*:'), { target: { value: 'Doe' } });
  fireEvent.change(getByLabelText('Email*:'), { target: { value: 'john@gmail.com' } });
  fireEvent.change(getByLabelText('Phone Number:'), { target: { value: '1234567890' } });
  fireEvent.change(getByLabelText('Text Area*:'), { target: { value: 'This is a test message' } });

  // Submit the form
  fireEvent.click(getByText('Submit'));

  // Restore the original console.log function
  console.log = originalConsoleLog;


  await waitFor(() => {
    // Find the form submission message in the console output
    const formSubmissionMessage = consoleOutput.find((message) =>
      message.includes('Form submitted with values:')
    );
  });
  
});