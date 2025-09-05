const Task = require('./models/Task')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const mongoose = require('mongoose');
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes          
app.use('/api/v1/tasks', tasks)

app.use()

const port = 3000 //hardcoding rn

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        console.log("✅ Connected to DB:", mongoose.connection.name);
        app.listen(port, console.log(`Server is listening on port ${port}...`))
        
    }catch(error){
        console.log(error)
    }
}

start()