const expressAsyncHandler = require("express-async-handler")

const { fetchAllChats } = require("../../../../lib/chats");
const fetchChat= expressAsyncHandler(async (req,res,next)=>{
  const chats= await fetchAllChats({userId:req.user._id})
  res.status(200).json(chats)
})

module.exports= fetchChat