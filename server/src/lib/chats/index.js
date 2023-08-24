const Chat = require("../../model/Chat");
const User = require("../../model/User");

const accessChat = async ({ userId, participantId }) => {
  if (!userId || !participantId) {
    throw new Error("Invalid user ID or participant ID");
  }
  //participantId = with whom the user want to chat

  // checking if chat between user and participant exists
  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: userId } } },
      { users: { $elemMatch: { $eq: participantId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    return isChat[0];
  }

  // if not chat exists, create new chat

  var chatData = {
    chatName: "sender",
    isGroupChat: false,
    users: [userId, participantId],
  };

  const createdChat = new Chat(chatData);
  await createdChat.save();

  const fullChat = await Chat.findOne({ _id: createdChat._id })
    .populate("users", "-password")
    .populate("latestMessage");

  return fullChat;
};

const fetchAllChats = async ({userId})=>{
 let allChats = await Chat.find({ users: { $elemMatch: { $eq: userId } } })
 .populate("users", "-password")
 .populate("groupAdmin", "-password")
 .populate("latestMessage")
//  .populate("latestMessage.sender", "name pic email")
 .sort({updatedAt:-1})

 allChats = await User.populate(allChats, {
    path: "latestMessage.sender",
    select: "name pic email",
  });
 return allChats
}

module.exports = {
  accessChat,
  fetchAllChats
};
