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
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true
    },
    dueDate: {
        type: Date,
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