import './intro.css';
import TeamImage from '../../assets/Images/TEAM/TEAM.jpg'
import {Card, Image, Container, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap';

const Intro = () => {
  return (
    <>
      <Container className='intro-container-class'>
        <Row>
          <Col sm={6}>
            <Row>
            <Image alt='teamImage' src={TeamImage} style={{ width: 'auto'}}/>
            </Row>
          </Col>
          <Col sm={6} className='cardCol'>
            <Card className='intro-card-class'>
              <Card.Body>
                <Card.Title>Welcome to Little Lemon, Chicago</Card.Title>
                <Card.Text>
                <div className="restaurant-introduction">
                  <p>
                    <em>Where Tradition Meets Modern Culinary Artistry</em>
                  </p>
                  <p>
                    At Little Lemon, we don't just serve food; we craft experiences that tantalize your taste buds and transport you to the heart of the Mediterranean. Nestled in the vibrant culinary landscape of Chicago, our family-owned restaurant is a gastronomic haven where the rich tapestry of traditional recipes interlaces seamlessly with a contemporary flair.
                  </p>
                  <h2>A Culinary Journey</h2>
                  <p>
                    Embark on a mouthwatering voyage as we pay homage to time-honored Mediterranean flavors. Our passionate chefs meticulously handpick the finest ingredients, infusing each dish with authenticity and innovation. Every plate is a masterpiece, a harmonious blend of old-world charm and modern culinary artistry.
                  </p>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card className='intro-card-class'>
              <Card.Body>
                <Card.Text>
                <div className="restaurant-introduction">
                  <h2>From Our Family to Yours</h2>
                  <p>
                    At Little Lemon, we believe in the power of family and community. Our warm, inviting ambiance mirrors the genuine hospitality you'd find in the Mediterranean. Whether you're savoring our signature dishes in our cozy dining room or indulging in a takeaway feast, you're not just a guest; you're a part of our extended family.
                  </p>
                  <h2>A Twist of Modernity</h2>
                  <p>
                    While we cherish tradition, we're not afraid to innovate. Our menu boasts creative interpretations of classic Mediterranean fare, elevating your dining experience to a whole new level. Each bite is a revelation, a symphony of flavors that ignites your senses and leaves you craving for more.
                  </p>
                  <h2>Join Us on a Culinary Odyssey</h2>
                  <p>
                    So, step inside our culinary haven, where old-world charm meets contemporary creativity. Let the aromas, flavors, and warmth of the Mediterranean envelop you. At Little Lemon, we invite you to embark on a gastronomic odyssey that promises delight with every bite.
                  </p>
                  <p>
                    <strong>Indulge. Savor. Experience Little Lemon.</strong>
                  </p>
                </div>
                </Card.Text>
              </Card.Body>
              <Nav className="reserveButton">
                <LinkContainer to="/reservation" className='navButton'>
                  <Nav.Link>Reserve a table</Nav.Link>
                </LinkContainer>
              </Nav>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default Intro



