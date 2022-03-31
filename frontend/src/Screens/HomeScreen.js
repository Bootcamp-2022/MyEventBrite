import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Event from '../components/Event'
import myImg from "../../src/images/homePage.jpg";
import { listEvents } from '../actions/eventActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const eventList = useSelector((state) => state.eventList)
  const {loading, error, events} = eventList
  useEffect(() => {
    dispatch(listEvents())
  }, [dispatch])

  return (
    <>
    <div><img className="img my-3" src={myImg} alt="homepage"></img></div>
    <h1 className = 'my-4'> Upcoming Events Near You</h1>
    {loading ? (
     <Loader/>
    ): error ? (
      <Message variant='danger'>{error}</Message>
    ) : ( <Row>
    {events.map((e) => (<Col key={e._id} sm={12} md={6} lg={4} xl={3}><Event event={e} /></Col> ))}

    </Row> )}
    
    </>
  )
}

export default HomeScreen