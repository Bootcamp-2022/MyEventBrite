// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import events from '../events';
// import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
// import axios from 'axios';


// const EventScreen = () => {
//  const params = useParams(); 
//  const [event, setEvent] = useState({})
 
//  useEffect(() => {
//     const fetchEvent = async () => {
//      const {data} = await axios.get(`/api/events/${params.id}`)
//     }
//  }, [])

//  return (
//      <>
//      <Link className='btn btn-light my-3' to='/'>
//         Go Back
//       </Link>
//       <Row>
//         <Col md={6}>
//           <Image src={event.image} alt={event.name} fluid />
//         </Col>
//         <Col md={3}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <h3>{event.name}</h3>
//             </ListGroup.Item>
//             <ListGroup.Item>
//                 <Row>
//                   <Col>Adult Price:</Col>
//                   <Col>
//                     <strong>{event.adtprice}</strong>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>

//               <ListGroup.Item>
//                 <Row>
//                   <Col>Kid Price:</Col>
//                   <Col>
//                     <strong>{event.kidprice}</strong>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//                 <ListGroup.Item>Description: {event.description}</ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={3}>
//           <Card>
//             <ListGroup variant='flush'>
//               <ListGroup.Item>
//               <Row>
//                   <Col>
//                   Price: 
//                   </Col>
//                   <Col>
//                   {event.price}
//                   </Col>
//                   </Row>
//             </ListGroup.Item>

//               <ListGroup.Item>
//                  <Row>
//                   <Col>Status:</Col>
//                   <Col>
//                     {event.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
              
//               <ListGroup.Item>
//                  <Button
//                   className='btn-block'
//                   type='button'
//                   disabled={event.countInStock === 0}>
                   
//                    Add To Cart
//                   </Button>
//                   </ListGroup.Item>

//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
     
//      </>
//  )
  
// }

// export default EventScreen