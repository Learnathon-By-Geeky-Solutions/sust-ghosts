const mongoose = require('mongoose');
const projectSchema = require('./project.model');
const Project = mongoose.model('Project',projectSchema)

// Find user by name


// Create a new task
const createNewProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

const projectUpdate = async(project) => {
    findProject = await Project.findOne({projectManager: project.projectManager, projectName: project.projectName})
    console.log(findProject)
    console.log(project)
    return await Project.findByIdAndUpdate(findProject._id, project, { new: true });
}

const projectDelete = async(project) => {
    findProject = await Project.findOne({projectManager: project.projectManager, projectName: project.projectName})
    
    return await Project.findByIdAndDelete(findProject._id)
}

module.exports = { createNewProject , projectUpdate, projectDelete};
