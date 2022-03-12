const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    email: {
        type:String,
        required: [true,'must provide name'],
    
    }
    ,
    password : {
         type:String
    },
    fullname : {
         type:String
    },
    time : {
         type:String
    },
    pickup: {
         type:String
    },
    destination : {
         type:String
    },
    contact : {
         type:String
    },
    
 })

module.exports = mongoose.model('Task',TaskSchema)