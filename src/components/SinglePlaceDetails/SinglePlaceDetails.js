import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import fakePlaces from "../../FakePlaces/fakePlaces";
import './SinglePlaceDetails.css'

const SinglePlaceDetails = () => {
  const { placeId } = useParams();

  const [place, setPlace] = useState({});
 

  useEffect(() => {
    const singlePlace = fakePlaces.find(selectedplace => selectedplace.id == placeId);
    setPlace(singlePlace);
  }, []);


  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{place.name}</h1>
            <p>{place.description}</p>
            
          </div>
          <div className="col-md-6">
            <Form>
              <Form.Group >
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group >
                <Form.Label>Destination</Form.Label>
                <Form.Control type="password"  />
              </Form.Group>
              <Row>
                <Col>
                <Form.Group >
                <Form.Label>From</Form.Label>
                <Form.Control type="date"  />
              </Form.Group>
                </Col>
                <Col>
                <Form.Group >
                <Form.Label>To</Form.Label>
                <Form.Control type="date"  />
              </Form.Group>
                </Col>
              </Row>  
                <Link to='/destination'><Button variant="primary" type="submit" className="bookingbtn">BookNow</Button></Link>
              
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePlaceDetails;
