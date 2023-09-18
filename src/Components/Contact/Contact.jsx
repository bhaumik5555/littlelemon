import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Box, Grid } from '@mui/material';
import Profile from '../Profile/Profile'
import Image1 from '../../assets/Images/Profile Pictures/1.jpeg'
import Image2 from '../../assets/Images/Profile Pictures/2.jpeg'
import Image3 from '../../assets/Images/Profile Pictures/3.jpeg'
import Image4 from '../../assets/Images/Profile Pictures/4.jpeg'
import Image5 from '../../assets/Images/Profile Pictures/5.jpeg'
import Image6 from '../../assets/Images/Profile Pictures/6.jpeg'
import Image7 from '../../assets/Images/Profile Pictures/7.jpeg'
import Image8 from '../../assets/Images/Profile Pictures/8.jpeg'
import Image9 from '../../assets/Images/Profile Pictures/9.jpeg'
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

const staffMembers = [
  {
    name: "Sophia Martinez",
    introduction: "Executive Chef",
    image: Image1,
    className: "profile-container",
    profileInfo: "Meet our Executive Chef, Sophia Martinez. With a culinary journey that spans continents, she brings a world of flavors to our Mediterranean kitchen. Sophia's passion for using locally-sourced, seasonal ingredients ensures that every dish is a celebration of freshness and taste.",
    profileRecommendation: "Signature Dish: Try her Mediterranean Grilled Octopus, a delightful fusion of Mediterranean and Latin American influences."
  },
  {
    name: "Eduardo Rodriguez",
    introduction: "Sous Chef",
    image: Image2,
    className: "profile-container",
    profileInfo: "Eduardo Rodriguez, our Sous Chef, is the mastermind behind the perfect balance of flavors in our dishes. With a background in French culinary techniques, he adds an elegant touch to Mediterranean classics, creating a symphony of taste on your plate.",
    profileRecommendation: "Fun Fact: Eduardo is a certified wine enthusiast and can recommend the perfect wine pairing for your meal."
  },
  {
    name: "Lena Flores",
    introduction: "Pastry Chef",
    image: Image3,
    className: "profile-container",
    profileInfo: "Meet Lena Flores, our Pastry Chef extraordinaire. Lena's passion for desserts is a sweet delight for our patrons. Her exquisite pastries and desserts are the perfect conclusion to your Mediterranean culinary journey.",
    profileRecommendation: "Must-Try Dessert: Indulge in Lena's Pistachio Baklava, a modern twist on a classic favorite."
  },
  {
    name: "Carlos Sanchez",
    introduction: "Mixologist",
    image: Image4,
    className: "profile-container",
    profileInfo: "Carlos Sanchez, our talented Mixologist, crafts cocktails that complement the rich flavors of our Mediterranean cuisine. From classic concoctions to innovative libations, his creations are a perfect match for your dining experience.",
    profileRecommendation: "Cocktail Recommendation: Try his Mediterranean Mule, a refreshing blend of flavors that pairs perfectly with our dishes."
  },
  {
    name: "Mia Johnson",
    introduction: "Sommelier",
    image: Image5,
    className: "profile-container",
    profileInfo: "As our dedicated Sommelier, Mia Johnson has an extensive knowledge of wine and can help you choose the perfect wine pairing for your meal. Her expertise ensures that your dining experience at Little Lemon is nothing short of exceptional.",
    profileRecommendation: "Wine Recommendation: Ask Mia to recommend a fine Mediterranean wine to complement your dish."
  },
  {
    name: "Diego Ramirez",
    introduction: "Restaurant Manager",
    image: Image6,
    className: "profile-container",
    profileInfo: "Diego Ramirez, our Restaurant Manager, ensures that your visit to Little Lemon is seamless and memorable. With a passion for hospitality, he oversees every aspect of your dining experience, from reservations to service.",
    profileRecommendation: "Customer Favorite: Many of our regulars appreciate Diego's personal touch and his knack for remembering their favorite dishes."
  },
  {
    name: "Olivia Davis",
    introduction: "Bartender",
    image: Image7,
    className: "profile-container",
    profileInfo: "Olivia Davis, our Bartender, crafts unique and flavorful cocktails that add an extra layer of excitement to your dining adventure. Her creative concoctions are a perfect prelude to your Mediterranean feast.",
    profileRecommendation: "Cocktail of the Month: Try Olivia's Mediterranean Sunset, a visually stunning and delicious cocktail that changes with the seasons."
  },
  {
    name: "Elena Gonzalez",
    introduction: "Hostess",
    image: Image8,
    className: "profile-container",
    profileInfo: "Elena Gonzalez, our friendly Hostess, is your first point of contact at Little Lemon. Her warm welcome and attention to detail ensure that you have a memorable dining experience from the moment you walk through our doors.",
    profileRecommendation: "Personal Touch: Elena takes pride in remembering regular guests' names and preferences, making every visit feel like coming home."
  },
  {
    name: "Raul Hernandez",
    introduction: "Sous Pastry Chef",
    image: Image9,
    className: "profile-container",
    profileInfo: "Raul Hernandez, our Sous Pastry Chef, is the creative force behind our delectable dessert offerings. His innovative approach to pastry crafting results in desserts that are both visually stunning and a delight for your taste buds.",
    profileRecommendation: "Sweet Temptation: Don't miss Raul's Chocolate Hazelnut Tart, a heavenly treat that's a favorite among our dessert enthusiasts."
  },
];


function Contact() {

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., make an API request
    alert('Thank you for your submission. Have a nice day.');
    console.log('Form submitted with values:', values);
  };

  return (
    <div>
      <Box className='profile-box'>
        <Grid container spacing={1}>
          {staffMembers.map((staff, index) => (
            <Grid item xl={3} md={4} sm={6} xs={12} key={staff.name}>
              <Profile
                name={staff.name}
                introduction={staff.introduction}
                image={staff.image}
                className={staff.className}
                profileInfo={staff.profileInfo}
                profileRecommendation={staff.profileRecommendation}
              />
            </Grid>
          ))}
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