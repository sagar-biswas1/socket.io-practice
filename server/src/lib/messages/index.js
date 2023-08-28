const Chat = require('../../model/Chat')
const Message = require('../../model/Message')
const User = require('../../model/User')
const sendMessage= async({content,chatID,senderID})=>{
  let newMessage = new Message({
    sender:senderID,
    chat:chatID,
    content:content,
  })

  await newMessage.save()
  await newMessage.populate("sender","name pic")
  await newMessage.populate("chat")
  newMessage= await User.populate(newMessage,{
    path:"chat.users",
    select:"name email pic"
  })
  await Chat.findByIdAndUpdate(chatID,{
    latestMessage:newMessage
  })
  return newMessage
}

module.exports={
    sendMessage
}