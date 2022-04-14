import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
//import { protect } from './middleware/authMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req,res) => {
    res.json({"msg": "hello hi"})
})

app.use(express.json())
app.use('/api/events', eventRoutes)
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)
//app.use(protect)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT} `));