import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js' 
import { connect } from 'mongoose'

//app config
const app = express()
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(cors())
app.use(express.json())

//api endpoint
app.get('/', (req, res) => {
    res.send('Api working fined')
})

app.listen(PORT, () => 
    console.log("Server is running on port",PORT))
