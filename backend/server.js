import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4800

connectDB();
connectCloudinary();

// middlewares
app.use(express.json())
app.use(cors());


// api endpoints

// localhost:4000/api/admin/add-doctor
app.use('/api/admin', adminRouter)
// api for the doctorsList (updated)
app.use('/api/doctor', doctorRouter)
// api for newUser 
app.use('/api/user', userRouter)



app.get('/', (req, res)=>{
     res.send('API WORKING FINE')
})

app.listen(port, ()=>{
    console.log("App is successfully running on port: ", port)
})