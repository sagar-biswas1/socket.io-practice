const router = require('express').Router()
const chatControllers= require('../api/v1/chats')
const userControllers= require('../api/v1/users')

router
.route("/api/v1/chat")
.post((req,res)=>{})
.get(chatControllers.findAll)
.patch((req,res)=>{})
.delete((req,res)=>{})




router
.route("/api/v1/chat/:id")
.post((req,res)=>{})
.get(chatControllers.findSingle)
.patch((req,res)=>{})
.delete((req,res)=>{})

router
.route("/api/v1/user/register")
.post(userControllers.registerUser)



router
.route("/api/v1/user/login")
.get((req,res)=>{})

module.exports = router