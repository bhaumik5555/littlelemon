import './intro.css';
import TeamImage from '../../assets/Images/TEAM/TEAM.jpg'
import {Card, Image, Container, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap';

const Intro = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <Row>
            <Image alt='teamImage' src={TeamImage} style={{ width: 'auto'}}/>
            </Row>
          </Col>
          <Col sm={6} className='cardCol'>
            <Card className='card_container'>
              <Row>
                <Card.Body>
                  <Card.Title>Little Lemon, Chicago</Card.Title>
                  <Card.Text>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                  </Card.Text>
                </Card.Body>
              </Row>
              <Row>
                <Nav className="reserveButton">
                  <LinkContainer to="/reservation" className='navButton'>
                    <Nav.Link>Reserve a table</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Intro

