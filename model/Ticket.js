const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    id : String,
    title : String,
    type: String,
    desc : String,
    pri : String,
    status : String,
    ticimg : String,
    user : String,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;