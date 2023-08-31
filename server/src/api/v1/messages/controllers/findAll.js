const asyncHandler = require("express-async-handler");
const { allMessages } = require("../../../../lib/messages");

const findAllMessages = asyncHandler(async (req, res, next) => {
  
  
  try {
    // const allMessages = await findMessages();
    res.status(200).json(allMessages);
  } catch (e) {
    next(e);
  }
});

module.exports = findAllMessages;
