import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import res from 'express/lib/response'
//import { protect } from './middleware/authMiddleware.js'

const app = express()
dotenv.config()
connectDB()


app.use(express.json())
app.use('/api/events', eventRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req,res)=>
    res.send(process.env.PAYPAL_CLIENT_ID))
app.use(notFound)
app.use(errorHandler)
//app.use(protect)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
   
}


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT} `));