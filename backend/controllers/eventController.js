import asyncHandler from 'express-async-handler'
import Events from '../models/eventModel.js'

//@desc  Fetch all events- what it does
// @route Get /api/events
//@acess Public

const getEvents = asyncHandler(async (req, res) => {
    const events = await Events.find({})
    res.json(events)
})

//@desc  Fetch single event by id- what it does
// @route Get /api/events/:id
//@acess Public

const getEventById = asyncHandler(async (req, res) => {
    const event = await Events.findById(req.params.id)
 
    if (event){
        res.json(event)
    } else {
        res.status(404).json({message: 'Event not found'})
    }
 })
 
 //@desc Fetch single event by id to select the events to book
 //@route GET /api/events/reserve/:id
 // @access Public
const getReserveById = asyncHandler(async (req,res) => {
     const event = await Events.findById(req.params.id)
     
     if(event){
         res.json(event)
     }else{
         res.status(404).json({message: 'Event not found'})
     }
})

export { getEvents, getEventById, getReserveById }