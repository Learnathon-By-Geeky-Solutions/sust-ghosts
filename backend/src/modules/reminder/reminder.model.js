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
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['To Do', 'Done', 'Delegated'],
        required: true
    }
});

module.exports = mongoose.model('Reminder', reminderSchema);
