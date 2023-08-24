const router = require('express').Router()
const chatControllers= require('../api/v1/chats')
const authControllers= require('../api/v1/authentication')
const userControllers= require('../api/v1/users')
const verifyJWT = require('../middleware/verifyJWT')


router
.route("/api/v1/chat")
.post(verifyJWT )
.get(verifyJWT , chatControllers.findAll)
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
.post(authControllers.registerUser)



router
.route("/api/v1/user/login")
.post(authControllers.authUser)


router.route("/api/v1/user").get(verifyJWT,userControllers.findUsers)

module.exports = router