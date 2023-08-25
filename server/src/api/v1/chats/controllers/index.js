const findAll = require("./findAll");
const findSingle = require("./findSingle");
const createOrAccessChat = require("./create");
const fetchChat = require("./fetchChats");
const createGroupChat = require("./createGroupChat");
const renameGroupChat = require('./renameGroupChat');
const addToGroupChat= require("./addToGroupChat");
const removeFromGroupChat = require('./removeFromGroupChat')
module.exports = {
  findAll,
  findSingle,
  createOrAccessChat,
  fetchChat,
  createGroupChat,
  renameGroupChat,
  addToGroupChat,
  removeFromGroupChat
};
