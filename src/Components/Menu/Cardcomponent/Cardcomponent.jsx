import React from 'react';
import Card from 'react-bootstrap/Card';

function Cardcomponent(props) {
  return (
    <div>
        <Card className='card-class' style={{ margin:'10px', height: '100%' }}>
          <Card.Img variant="top" src={props.imagesrc} style={{ width: '300px', height: '200px' }}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.price}</small>
          </Card.Footer>
        </Card>
    </div>
  )
}

export default Cardcomponent;