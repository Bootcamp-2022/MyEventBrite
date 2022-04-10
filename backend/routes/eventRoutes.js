import express from 'express'
import { getEvents, getEventById, getReserveById } from '../controllers/eventController.js'

const router = express.Router()

//@desc  Fetch all events- what it does
// @route Get /api/events
//@acess Public
router.get('/', getEvents)

//@desc  Fetch single event by id- what it does
// @route Get /api/events/:id
//@acess Public
router.get('/:id', getEventById)

//@desc Fetch single event by id to select the events to book
//@route GET /api/events/reserve/:id
// @access Public
router.get('/reserve/:id', getReserveById)

export default router
