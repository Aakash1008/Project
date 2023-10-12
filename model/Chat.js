
const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  ticketId: String,
  sender: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
