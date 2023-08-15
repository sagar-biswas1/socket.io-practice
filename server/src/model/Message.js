const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const messageModel = new Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Message = model("Message", messageModel);

module.exports = Message;
