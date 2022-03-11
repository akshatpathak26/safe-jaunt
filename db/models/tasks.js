const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
   email: {
       type:String,
      
   
   },
   password:String
})

module.exports = mongoose.model('Task',TaskSchema)