import {Card} from 'react-bootstrap';
import './profile.css'

function Profile(props) {
  return (
          <Card className='profile-card-class'>
            <Card.Img variant="top" src={props.image} className='profilePicture profile-image' />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                <p className="profile-introduction">{props.introduction}</p>
                <p className="profile-info">{props.profileInfo}</p>
                <p className="profile-info profile-recommendation">{props.profileRecommendation}</p>
              </Card.Text>
            </Card.Body>
          </Card>
  );
}

export default Profile;