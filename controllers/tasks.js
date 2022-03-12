const mongoose = require('mongoose')
const Task = require('../db/models/tasks')
const bodyparser = require('body-parser')
const path = require('path');

const home = (req,res)=>{
   res.send('<h1>SAFE JAUNT </h1> <a href="api/safe-jaunt">route your route</a>')}
   
const createUser =  (req,res) =>{
   // const task = Task.create({email:req.body.email,password:req.body.password})
   const task = Task.create(req.body)
    res.redirect('/slot')
    }

const slot = (req,res) =>{
    res.sendFile(path.join(__dirname, './slot.html')
    )
}    
const slotPost = (req,res) =>{
    const task = Task.create({fullname:req.body.fullname,time:req.body.time,location:req.body.location,destination:req.body.destination,contact:req.body.contact})
    res.redirect('/slot')
}    
  
const slotToken = (req,res) =>{
    res.sendFile(path.join(__dirname, './slotToken.html'))
}  

module.exports = {
    home,createUser,slot,slotToken,slotPost
}
