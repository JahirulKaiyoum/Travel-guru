import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";

import fakePlaces from "../../FakePlaces/fakePlaces";
import './SinglePlaceDetails.css'

const SinglePlaceDetails = () => {
  const { placeName } = useParams();

  //const [place, setPlace] = useState({});

  const singlePlace = fakePlaces.find(selectedplace => selectedplace.name == placeName);
  const { id,name ,description,Latitude,Longitude } = singlePlace;
 
  //const { id,name } = place;
  
  console.log('place name', name, 'place id', id);
  
  
  const history = useHistory();
  const handleSubmit = () => {
  
    
  history.push(`/destination/${name}/${Latitude}/${Longitude}`)
}

  return (
    <section className='places-section'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 description-details">
         
            
          <h1>{name}</h1>
            <p>{description}</p>
            
          </div>
          <div className="col-md-6">
            <Form className="form-design" onSubmit={handleSubmit}  >
              <Form.Group >
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" required='true' />
              </Form.Group>

              <Form.Group >
                <Form.Label>Destination</Form.Label>
                <Form.Control type="password"  required='true' />
              </Form.Group>
              <Row>
                <Col>
                <Form.Group >
                <Form.Label>From</Form.Label>
                <Form.Control type="date" required='true' />
              </Form.Group>
                </Col>
                <Col>
                <Form.Group >
                <Form.Label>To</Form.Label>
                <Form.Control type="date" required='true' />
              </Form.Group>
                </Col>
              </Row>  
             
              <Button variant="primary" type="submit" className="bookingbtn"  >BookNow</Button>
              
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePlaceDetails;