import express from 'express'
import asyncHandler from 'express-async-handler'
import Events from '../models/eventModel.js'


const router = express.Router()

//@desc  Fetch all events- what it does
// @route Get /api/events
//@acess Public
router.get('/',
    asyncHandler(async (req, res) => {
    const events = await Events.find({})
    res.json(events)
}))

//@desc  Fetch single event by id- what it does
// @route Get /api/events/:id
//@acess Public
router.get('/:id', asyncHandler(async (req, res) => {
   const event = await Events.findById(req.params.id)

   if (event){
       res.json(event)
   } else {
       res.status(404).json({message: 'Event not found'})
   }
}))

export default router
