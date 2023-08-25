const asyncHandler = require("express-async-handler");
const {activateGroupChat} = require('../../../../lib/chats')
const createGroupChat = asyncHandler(async (req, res, next) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).json({ message: "please fill all the fields" });
  }

  const users = JSON.parse(req.body.users);
  if (users.length < 2) {
    return res
      .status(400)
      .json({ message: "More then 2 users are required" });
  }

  users.push(req.user)
  
  try {
  const fullGroupChat= await activateGroupChat(users,req.body.name, req.user)

  res.status(200).json({ data: fullGroupChat})

  } catch (err) {
    next(err);
  }
});

module.exports = createGroupChat;
