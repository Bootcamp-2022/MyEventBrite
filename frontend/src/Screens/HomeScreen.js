import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Event from '../components/Event'
import myImg from "../../src/images/homePage.jpg";
import { listEvents } from '../actions/eventActions';

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
      <h2>Loading...</h2>
    ): error ? (
      <h3>{error}</h3>
    ) : ( <Row>
    {events.map((e) => (<Col key={e._id} sm={12} md={6} lg={4} xl={3}><Event event={e} /></Col> ))}

    </Row> )}
    
    </>
  )
}

export default HomeScreen