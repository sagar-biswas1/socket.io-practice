const asyncHandler = require("express-async-handler");
const { addToGroup } = require("../../../../lib/chats");
const addToGroupChat = asyncHandler(async (req,res,next) => {
  const { chatId, userId } = req.body;
  try {
    const addUserToGroupChat = await addToGroup(chatId, userId);
    if (!addUserToGroupChat) {
      res.status(404);
      throw new Error("group chat not found");
    }
    return res.status(200).json({ data: addUserToGroupChat });
  } catch (err) {
    next(err);
  }
});

module.exports = addToGroupChat;
