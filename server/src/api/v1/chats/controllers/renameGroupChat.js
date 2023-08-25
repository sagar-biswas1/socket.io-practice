const asyncHandler = require("express-async-handler");
const { renameGroup } = require("../../../../lib/chats");
const renameGroupChat = asyncHandler(async (req,res,next) => {
  const { chatId, chatName } = req.body;
  try {
    const updatedDoc = await renameGroup(chatId, chatName);
    if (!updatedDoc) {
      res.status(404);
      throw new Error("chat not found");
    }
    return res.status(200).json({ data: updatedDoc });
  } catch (err) {
    next(err);
  }
});

module.exports = renameGroupChat;
