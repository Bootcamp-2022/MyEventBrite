import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tickets from "./Tickets";

const Event = ({ event }) => {
  return (
    <Card className="my-3 rounded">
      <Link to={`/event/${event._id}`}>
        <Card.Img src={event.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/event/${event._id}`}>
          <Card.Title as="div">
            <strong>{event.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text style={{ color: "red" }} className="schedule" as="h6">
          {event.schedule}
        </Card.Text>
        <br />
        <Card.Text as="p">{event.Address}</Card.Text>
        <Card.Text as="p">{event.price}</Card.Text>
        <Card.Text as="h6">{event.name}</Card.Text>
        <Card.Text as="h6">
          <i className="fa-solid fa-person-running mx-1"></i>
          {event.followers} followers
        </Card.Text>
        <Card.Text as="div">
          <Tickets value={event.tickets} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Event;
