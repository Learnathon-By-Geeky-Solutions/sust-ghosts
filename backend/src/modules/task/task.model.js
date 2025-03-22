const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true    
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    dueDate: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Completed'],
        require: true
    },
    comment: {
        type: String,

    }
})
module.exports = taskSchema