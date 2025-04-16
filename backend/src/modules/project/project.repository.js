const mongoose = require('mongoose');
const projectSchema = require('./project.model'); 
const userSchema = require('../user/user.model')
const User = mongoose.model('User',userSchema);
const Project = mongoose.model('Project',projectSchema)

// Find user by name


// Create a new task
const createNewProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

const projectUpdate = async(id, body) => {
    user = await User.find({email: body.assignee})
    console.log(user)
    body.assignee = user._id
    return await Task.findByIdAndUpdate(id, body, { new: true });
}

const projectDelete = async(id) => {
    return await Task.findByIdAndDelete(id)
}

module.exports = { createNewProject , projectUpdate, projectDelete};
