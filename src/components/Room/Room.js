import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Room.css'

const Room = (props) => {
    const { _id, img, name, description, price } = props.room;
    const { handleBookNow } = props;
    return (
        
             <div className="tour">
                
                <Col>
                    {/* <Card className='p-0 shadow-sm'> */}
                   
                    <Card  style={{ width: '25rem' }}>
                <div className="img-body text-center ">
                <Card.Img variant="top" src={img}style={{ height: '200px', width: '100%'}} />
                </div>
 
  <Card.Body>
    <Card.Title>
       <h3 className="text-center text-primary">{name}</h3>
    </Card.Title>
    
    <Card.Text><small className='text-muted'>{description}</small></Card.Text>
    <h5 className="text-center">Price:${price}</h5>
    <Button onClick={() => handleBookNow(_id)} variant='outline-dark' className='w-100'>Book now</Button>
  </Card.Body>
</Card>
                </Col>
            </div> 
        
       
    );
};

export default Room;