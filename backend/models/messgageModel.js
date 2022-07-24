const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    message: {
        type: String,
        required:[true, 'Please add messae here'],
        minLength: 10,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Message', messageSchema);