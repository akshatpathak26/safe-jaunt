require('dotenv').config()

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const { route } = require('express/lib/router')

//middleware
app.use(express.json())
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.send('<h1>SAFE JAUNT </h1> <a href="api/safe-jaunt">route your route</a>')
})
  //  res.sendFile(path.join(__dirname, "../public/login.png"));

//products route


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8080

const start = async () =>{
    try {
        //connent to db
        app.listen(port,console.log('server is listening to the port 8080'))
    } catch (error) {
        
    }
}

start()
