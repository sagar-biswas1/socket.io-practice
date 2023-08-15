const router = require('express').Router()
const chatControllers= require('../api/v1/chats')

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

module.exports = router