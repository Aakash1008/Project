const mongoose = require("mongoose");

module.exports.init = async function () {
  await mongoose.connect(
    "mongodb+srv://aakashbafna1008:28HOjDnBpCW5aHZ7@cluster0.foipypv.mongodb.net/?retryWrites=true&w=majority"
  );
};
