const connectDB =require('./db/connect')
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())
//routes

app.use('/',tasks)

const port = 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`the server is listening to ${port}`))
    }
  
  catch (error) {
        console.log(error);
    }
} 

start()

