import express from 'express'
import dotenv from 'dotenv'
import events from './data/events.js'
import connectDB from './config/db.js'
const app = express()
dotenv.config()
connectDB()

// app.get('/', (req,res) => {
//     res.json({"msg": "hello hi"})
// })

app.get('/api/events', (req, res) => {
    res.json(events)
})

app.get('/api/events/:id', (req, res) => {
   const event = events.find((p) => p._id === req.
   params.id);
   res.json(event);
})
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT} `));