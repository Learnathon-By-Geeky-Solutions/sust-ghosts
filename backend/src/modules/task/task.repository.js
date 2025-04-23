const mongoose = require('mongoose');
const taskSchema = require('./task.model'); 
const userSchema = require('../user/user.model')
const User = mongoose.model('User',userSchema);
const Task = mongoose.model('Task',taskSchema)

// const { findUserByMail } = require('../user/user.utility');

// Find user by name


// Create a new task
const createNewTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
};

const taskUpdate = async(id, body) => {
    // user = await User.find({email: body.assignee})
    // console.log(user)
    // body.assignee = user._id
    return await Task.findByIdAndUpdate(id, body, { new: true });
}

const taskDelete = async(id) => {
    return await Task.findByIdAndDelete(id)
}

const findTasksByProjectId = async (projectId) => {
    return await Task.find({ projectId: projectId });
};

const findTasksByAssignee = async (assigneeId) => {
    return await Task.find({ assignee: assigneeId });
};

const findTasksByAssignedBy = async (assignedById) => {
    return await Task.find({ assignedBy: assignedById });
};

module.exports = { 
    createNewTask, 
    taskUpdate, 
    taskDelete,
    findTasksByProjectId,
    findTasksByAssignee,
    findTasksByAssignedBy
};