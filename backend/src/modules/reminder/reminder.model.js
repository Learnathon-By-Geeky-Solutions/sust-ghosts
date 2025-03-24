const mongoose = require('mongoose');

const reminderSchema = mongoose.Schema({
    
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },

    desc: {
        type: String, 
        require: true    
    },

    time: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ['To Do', 'Done', 'Delegated'],
        require: true
    },
})
module.exports = reminderSchema