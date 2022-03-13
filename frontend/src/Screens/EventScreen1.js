import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
    Button,
} from "react-bootstrap";
import events from "../events";

const EventScreen1 = () => {
  const params = useParams();
  const event = events.find((e) => e._id === params.id);
  return (
    <>
      <div className="container my-4">
        <Row class="justify-content-md-center">
          <Col class="column" md={9} xs={12} sm={12}>
            <Image src={event.image1} alt={event.name} />
          </Col>
          <Col class="column" md={3} xs={12} sm={12}>
            <ListGroup>
              <ListGroup.Item>{event.schedule.slice(5, 8)}<br/>{event.schedule.slice(8, 11)}</ListGroup.Item>
              <ListGroup.Item>
                <h3>{event.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <p style={{ color: "red" }}>by {event.name}</p>
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