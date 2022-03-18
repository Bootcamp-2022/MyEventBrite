import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Event from '../components/Event'
import myImg from "../../src/images/homePage.jpg";

const HomeScreen = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const fetchEvents = async () => {
     const {data} = await axios.get('/api/events')
       setEvents(data)
   }

   fetchEvents()
  }, [])

  return (
    <>
    <div><img className="img my-3" src={myImg} alt="homepage"></img></div>
    <h1 class = 'my-4'> Upcoming Events Near You</h1>
    <Row>
        {events.map((e) => (<Col key={e._id} sm={12} md={6} lg={4} xl={3}><Event event={e} /></Col> ))}

    </Row>
    </>
  )
}

export default HomeScreen