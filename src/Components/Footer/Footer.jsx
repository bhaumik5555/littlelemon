import {React} from 'react'
import {Form, Button, InputGroup, Card, Image, Container, Row, Col} from 'react-bootstrap';
import Logo from '../../assets/Images/Asset 16@4x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Formik } from 'formik';
import '@fortawesome/fontawesome-free/css/all.css';
import './footer.css'

const Footer = () => {
    // const [email, setEmail] = useState('');

    // const handleSubscribe = (e) => {
    //   e.preventDefault();
    //   if (email.type){
    //     alert('Thank you for subscribing')
    //   }
    //   else{
    //   alert('Please enter valid email id');
    //   }
    // }

  return (
    <section className='footer_container'>
      <Container>
        <Row>
          <Image alt="Logo" src={Logo} id="footer_logo" />
        </Row>
        <Row>
          <Col>
            <Card className='footer_container card_container' style={{ width: '18rem'}}>
              <Card.Body>
                <Card.Title>About Restaurant</Card.Title>
                <Card.Text>
                  Be the first to know about new collections, special events, and what's going on at Our Place.
                </Card.Text>
                      {/* Facebook link */}
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='social_media_logo'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                {/* Instagram link */}
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='social_media_logo'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                {/* Twitter link */}
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className='social_media_logo'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>

                {/* Youtube link */}
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='social_media_logo'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={5}>
            <Card className='footer_container card_container' style={{ width: '18rem'}}>
              <Card.Body>
                <Card.Title>GET NEWS & OFFERS</Card.Title>
                <Card.Text>
                  Subscribe & get <strong>10%</strong> discount. Get E-mail updates about our latest shop and <strong>special offers</strong>.
                </Card.Text>
              </Card.Body>
            </Card>
            <InputGroup>
              {/* <Form.Control
                placeholder="Your Email Id"
                aria-label="Recipient's email id"
                aria-describedby="basic-addon2"
              /> */}
              {/* <form onSubmit={handleSubscribe}>
                <input
                  type='email'
                  placeholder='Your Email Id'
                  aria-describedby='basic-addon2'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <Button variant="outline-secondary" id="button-addon2" className='text-white' type='submit'>
                  SUBSCRIBE
                </Button>
              </form> */}

              <Formik
                initialValues={{ email: ''}}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Container>
                    <Form onSubmit={handleSubmit}>
                      <Row className="justify-content-md-center">
                        <Col sm='8'>
                          <Form.Control
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter Your Email Id"
                          />
                          {errors.email && touched.email && errors.email}
                        </Col>
                        <Col sm='4'>
                          <Button type="submit" disabled={isSubmitting}>
                            Subscribe
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                )}
              </Formik>
            </InputGroup>
          </Col>

          <Col>
            <Card className='footer_container card_container' style={{ width: '18rem'}}>
              <Card.Body>
                <Card.Title>CONTACT US</Card.Title>
                <Card.Text>
                  Delicious Restaurant & Fine dining. 123 Best St, Toronto, ON Canada. <br/>
                  <strong>+1-123-456-7890</strong> <br/>
                  <a href={`mailto:reservations@littlelemon.com`} className='text-white'>
                    reservations@littlelemon.com
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer