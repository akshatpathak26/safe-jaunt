const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   userName: {
       type:String,
       required: [true,'must provide name'],
   
   },
   password:{
       type:String,
       required:[true,'must provide name']
   },
   destination:{
       type:String,
       required:[true,'must provide name']
   },
   pickup:{
       type:String,
       required:[true,'must provide name']
   },
   completed: {
       type :Boolean,
       default: false,
   }
})

module.exports = mongoose.model('User',UserSchema)