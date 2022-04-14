import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { useParams,useNavigate } from "react-router-dom";
import {Card,Button,Row,Col,Form} from 'react-bootstrap'
import Message from "./Message";
import Loader from "./Loader";
import { reserveEvent } from '../actions/eventActions'
const Reserve = () => {
  const [qty1, setQty1] = useState(1);
  // const [qty2, setQty2] = useState(0);
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
   const eventReserve = useSelector((state) => state.eventReserve)
 
  const {loading, error, event} = eventReserve
  useEffect(() => {
   dispatch(reserveEvent(params.id))
  },[dispatch,params])

  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty1=${qty1}`)
  }

  return (
    <>
    {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (      
        <Card className="justify-content-md-center" style={{ width: '44rem',height:'20rem' }} >
        <Row >
          
        <Col className="column mx-2" md={4}> 
         <div>{event.title}</div>
        <p>{event.schedule}</p>
        
        <Card.Img style={{ width: '18rem',height:'11rem' }}variant="top" src={event.image} /> </Col>
                <Col className="column" md={6}>
          
          <Row>
              Price: $ {event.adtprice}
              
              
        <Form.Control className='mx-2'
        style={{color:'purple',width: '50%'}}
                        as='select'
                        value={qty1}
                        onChange={(e) => setQty1(e.target.value)}
                      > 
                        {[...Array(event.tickets).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))
                        }
                         </Form.Control> </Row><br/>
                         {/* <Row> 
                           Child - 6+ 
                         <Form.Control style={{color:'purple', width:'60%'}}
                        as='select'
                        value={qty2}
                        onChange={(e) => setQty2(e.target.value)}
                      >
                        {[...Array(event.tickets).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))
                        }
                         </Form.Control></Row> */}
                      <Button style={{width: '45%'}}
         className="btn-block mx-5"
         type="button"
         onClick={addToCartHandler}
         disabled={event.tickets === 0} 
       >Add to cart</Button>
                      </Col>
  
</Row>
</Card>
      )}
    </>
  )
}

export default Reserve