const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    desc: {
        type: String,
        required: true    
    },
    time: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['To Do', 'Done', 'Delegated'],
        required: true
    }
});

module.exports = { reminderSchema };
