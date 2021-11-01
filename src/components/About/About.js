import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faAddressBook, faCoffee, faMapMarked, faMapMarkedAlt,faPhone,faPlane,faPlaneArrival,faUserAlt,sackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div className="row m-5" id="about">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
            <Card>
        
<div className="img-body text-center " >
            <Card.Img variant="top" src="https://i.ibb.co/4pzYnYN/about-1-768x247.jpg"style={{ height: '400px', width: '100%'}}  />
            </div>
    {/* <Card.Body>
       <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>  */}
  </Card> 
  <div className="row m-5">
      <h2 className="text-center text-danger m-3 ">OUR STORY</h2>
   <p className="text-primary">Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa</p>
  </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <Card >
        
        <div className="img-body text-center  ">
                        <Card.Img variant="top" src="https://i.ibb.co/fpsMn5j/about-2-768x247.png"style={{ height: '400px', width: '100%'}} />
                        </div>
               
                  
              </Card> 
           
            <div className="row m-3">
                <h2 className="text-center text-danger m-3">OUR MISSION</h2>
                <p className="text-primary"> Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa.</p>
            </div>
        </div>
    </div>
    <div className="row">
        <h6 className="text-center text-danger"> WHY YOU CHOSE OUR TRAVEL </h6>
    <div className=" icon col-lg-4 col-md-4 g-lg-2 p-3" ><i class="fa fa-y-combinator" aria-hidden="true"></i>
        <Card style={{ width: '18rem' ,height:'300px' }}>
        <div className="foter-phone-icon text-center mt-2 ">
                  <FontAwesomeIcon icon={faMapMarkedAlt} style={{height: '50px', width: '40px', color:'blue'}} />
                </div> 

<Card.Body>
<Card.Title className="text-center">
<p>Unique Destination</p>
</Card.Title>

<Card.Text className="p-4">
 <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda?</p>
</Card.Text>

</Card.Body>
</Card>
        </div>
    <div className=" icon col-lg-4 col-md-4 g-lg-2 p-3" >
        <Card style={{ width: '18rem' ,height:'300px' }}>
        <div className="foter-phone-icon text-center mt-2 ">
                  <FontAwesomeIcon icon={faPhone} style={{height: '50px', width: '40px', color:'blue'}} />
                </div> 

<Card.Body>
<Card.Title className="text-center">
   <p>All Time Contact</p>
</Card.Title>

<Card.Text className="p-4">
 <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda?</p>
</Card.Text>

</Card.Body>
</Card>
        </div>
    <div className=" icon col-lg-4 col-md-4 g-lg-2 p-3" >
        <Card style={{ width: '18rem' ,height:'300px' }}>
        <div className="foter-phone-icon text-center mt-2 ">
                  <FontAwesomeIcon icon={faPlane} style={{height: '50px', width: '40px', color:'blue'}} />
                </div> 

<Card.Body>
<Card.Title className="text-center">
   <p>Best Arival</p>
</Card.Title>

<Card.Text className="p-4">
 <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda?</p>
</Card.Text>

</Card.Body>
</Card>
        </div>
    <div className=" icon col-lg-4 col-md-4 g-lg-2 p-3" >
        <Card style={{ width: '18rem' ,height:'300px' }}>
        <div className="foter-phone-icon text-center mt-2 ">
                  <FontAwesomeIcon icon={faUserAlt} style={{height: '50px', width: '40px', color:'blue'}} />
                </div> 

<Card.Body>
<Card.Title className="text-center">
<p>Quick Backup</p>
</Card.Title>
 
<Card.Text className="p-4">
 <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda?</p>
</Card.Text>

</Card.Body>
</Card>
        </div>
    <div className=" icon col-lg-4 col-md-4 g-lg-2 p-3" >
        <Card style={{ width: '18rem' ,height:'300px' }}>
        <div className="foter-phone-icon text-center mt-2 ">
                  <FontAwesomeIcon icon={faCoffee} style={{height: '50px', width: '40px', color:'blue'}} />
                </div> 

<Card.Body>
<Card.Title className="text-center">
 <p >Exciting Travel</p>
</Card.Title>

<Card.Text className="p-4">
 <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda?</p>
</Card.Text>

</Card.Body>
</Card>
        </div>
    <div className=" icon col-lg-4 col-md-4 g-lg-2 p-3" >
        <Card style={{ width: '18rem' ,height:'300px' }}>
        <div className="foter-phone-icon text-center mt-2 ">
                  <FontAwesomeIcon icon={faAddressBook} style={{height: '50px', width: '40px', color:'blue'}} />
                </div> 

<Card.Body>
<Card.Title className="text-center">
   <p>Quick Booking</p>
</Card.Title>

<Card.Text className="p-4">
 <p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, assumenda?</p>
</Card.Text>

</Card.Body>
</Card>
        </div>
    </div>
     </div> 
     
    
     
         

     
    
    
    );
};

export default About;