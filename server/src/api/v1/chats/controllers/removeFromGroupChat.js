const asyncHandler = require("express-async-handler");
const { removeFromGroup } = require("../../../../lib/chats");
const removeFromGroupChat = asyncHandler(async (req,res,next) => {
  const { chatId, userId } = req.body;
  try {
    const removeUserFromGroupChat = await removeFromGroup(chatId, userId);
    if (!removeUserFromGroupChat) {
      res.status(404);
      throw new Error("group chat not found");
    }
    return res.status(200).json({ data: removeUserFromGroupChat });
  } catch (err) {
    next(err);
  }
});

module.exports = removeFromGroupChat;
