const mongoose = require('mongoose');
const taskSchema = require('./task.model'); 
const userSchema = require('../user/user.model')
const User = mongoose.model('User',userSchema);
const Task = mongoose.model('Task',taskSchema)

// Find user by name
const findUserByMail = async (email) => {
    const user = await User.find({ email: email });
    return user
};

// Create a new task
const createNewTask = async (taskData) => {
    const task = new Task(taskData);
    return await task.save();
};

const taskUpdate = async(id, body) => {
    user = await User.find({email: body.assignee})
    console.log(user)
    body.assignee = user._id
    return await Task.findByIdAndUpdate(id, body, { new: true });
}

const taskDelete = async(id) => {
    return await Task.findByIdAndDelete(id)
}

module.exports = { findUserByMail, createNewTask , taskUpdate, taskDelete};
