import {Card, Col, Row} from 'react-bootstrap';
import './profile.css'

function Profile(props) {
  return (
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={props.image} className='profilePicture' />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.introduction}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default Profile;