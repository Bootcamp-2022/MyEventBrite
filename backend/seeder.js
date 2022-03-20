import dotenv from 'dotenv'
import users from './data/users.js'
import events from './data/events.js'
import Users from './models/userModel.js'
import Events from './models/eventModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try{
       await Events.deleteMany()
       await Users.deleteMany()

       const createdUsers = await Users.insertMany(users)
       const adminUser = createdUsers[0]._id

      const sampleEvents = events.map((p) => {
           return {...p, user: adminUser}
       })

       await Events.insertMany(sampleEvents)
       console.log('Data is imported!')
       process.exit()

    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
       await Events.deleteMany()
       await Users.deleteMany()

       console.log('Data is destroyed!')
       process.exit()

     } catch (error) {
        console.error(`${error}`)
        process.exit(1)

    }
}

if (process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}