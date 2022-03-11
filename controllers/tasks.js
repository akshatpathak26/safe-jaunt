const mongoose = require('mongoose')
const Task = require('../db/models/tasks')
const bodyparser = require('body-parser')
const path = require('path');

const home = (req,res)=>{
   res.send('<h1>SAFE JAUNT </h1> <a href="api/safe-jaunt">route your route</a>')}
   
const createUser =  (req,res) =>{
    const task = Task.create({email:req.body.email,password:req.body.password})
    res.redirect('/slot')
    }

const slot = (req,res) =>{
    res.sendFile(path.join(__dirname, '/slot.html'))
}    
  
  

module.exports = {
    home,createUser,slot
}
