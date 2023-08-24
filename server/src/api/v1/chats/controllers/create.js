const asyncHandler = require("express-async-handler");

const { accessChat } = require("../../../../lib/chats");

const createOrAccessChat = asyncHandler(async (req,res,next) => {
  const { participantId } = req.body;
  if (!participantId) {
    return res.sendStatus(400);
  }

  const chat = await accessChat({ userId: req.user._id, participantId });

  res.status(200).json(chat);
});

module.exports = createOrAccessChat;
