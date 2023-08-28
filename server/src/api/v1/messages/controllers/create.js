const asyncHandler = require("express-async-handler");
const { sendMessage } = require("../../../../lib/messages");

const createMessage = asyncHandler(async (req, res, next) => {
  const { content, chatID } = req.body;
  if (!chatID || !content) {
    return res.sendStatus(400);
  }
  try {
    const newMessage = await sendMessage({ content, chatID, sender: req.user });
    res.status(200).json(newMessage);
  } catch (e) {
    next(e);
  }
});

module.exports = createMessage;
