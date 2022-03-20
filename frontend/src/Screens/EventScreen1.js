import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
    Button,
} from "react-bootstrap";


const EventScreen1 = () => {
  const params = useParams();
  const [event, setEvent] = useState({})
 
 useEffect(() => {
    const fetchEvent = async () => {
      const {data} = await axios.get(`/api/events/${params.id}`)

      setEvent(data)
    }

    fetchEvent()
 }, [params])
  
  return (
    <>
      <div className="container my-4">
        <Row className="justify-content-md-center">
          <Col className="column" md={9} xs={12} sm={12}>
            <Image src={event.image1} alt={event.name} />
          </Col>
          <Col className="column" md={3} xs={12} sm={12}>
            <ListGroup>
              
              <ListGroup.Item>{event.schedule?event.schedule.slice(5,11):""}</ListGroup.Item>
              <ListGroup.Item>
                <h3>{event.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>by <span style={{ color: "red" }}>{event.name}</span> </p>
                <p>{event.followers} followers <Button id = "follow" variant="primary" size="sm">
                 Follow  </Button></p>
              </ListGroup.Item>

              {/* <ListGroup.Item>Price: ${event.adtprice?event.adtprice: "Free"}</ListGroup.Item>
            <ListGroup.Item>Price: ${event.kidprice?event.kidprice: "Free"}</ListGroup.Item>     */}
              <ListGroup.Item>{event.kidprice?`$${event.kidprice.slice(0,6)}`:"Free"} - {event.adtprice?`$${event.adtprice.slice(0,6)}`:"Event"}</ListGroup.Item>
            
              </ListGroup>
            <Button
              className="btn-block"
              type="button"
              disabled={event.tickets === 0}
            >
             {event.price === "Free" ? "Register" : "Tickets"}
            </Button>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col md={9} xs={12} sm={12}>
        <ListGroup.Item>
          <h5>{event.description}</h5>{" "}
        </ListGroup.Item>
        </Col>
        <Col md={3} xs={12} sm={12}>
        <p>Date and time</p>
        <p>{event.schedule}</p>
        <p>Location <br/> {event.Address}</p>
                
        </Col>
        </Row>
      </div>
    </>
  );
};

export default EventScreen1;