import React, { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'

import { useParams,Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
    Button
} from "react-bootstrap";
import { listEvent } from "../actions/eventActions";
import Loader from "../components/Loader";
import Message from "../components/Message";


const EventScreen1 = () => {
  const params = useParams();
  const dispatch = useDispatch()
   const eventDetails = useSelector((state) => state.eventDetails)
   const {loading, error, event} = eventDetails
 useEffect(() => {
  dispatch(listEvent(params.id)) 
 }, [dispatch,params])
  
  return (
    <>
  {loading ? (
     <Loader/>
   ): error ? (
    <Message variant='danger'>{error}</Message>
   ):  (<div className="container">
   <Row className="justify-content-md-center">
     <Col className="column" md={9} xs={12} sm={12}>
       <Image src={event.image1} alt={event.name} />
            </Col>
     <Col className="column" md={3} xs={12} sm={12}>
       <ListGroup>
       <ListGroup.Item>{event.schedule?event.schedule.slice(4,11):""}</ListGroup.Item>
         {/* <ListGroup.Item>{event.schedule.slice(5, 8)}<br/>{event.schedule.slice(8, 11)}</ListGroup.Item> */}
         <ListGroup.Item>
           <h3>{event.title}</h3>
         </ListGroup.Item>
         <ListGroup.Item>
           <p>by <span style={{ color: "darkblue" }}>{event.name}</span></p>
           <p>{event.followers} followers <Button id = "follow" variant="primary" size="sm">
 Follow  </Button></p>
         </ListGroup.Item>
          <ListGroup.Item>{event.kidprice?`$${event.kidprice}`:"Free"} - {event.adtprice?`$${event.adtprice}`:"Event"}</ListGroup.Item>
                </ListGroup>
                <Link to ={`/reserve/${event._id}`}> 
       <Button 
         className="btn-block"
         type="button"
         disabled={event.tickets === 0?true:false} 
       >
        {event.price === "Free" ? "Register" : "Tickets"}
       </Button>
           </Link>   
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
 </div>)}
     
    </>
  );
};

export default EventScreen1;