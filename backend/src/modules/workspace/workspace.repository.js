const mongoose = require('mongoose');
const workspaceSchema = require('./workspace.model');
const Workspace = mongoose.model('Workspace',workspaceSchema)

// Find user by name


// Create a new task
const createNewWorkspace = async (workspaceData) => {
    const workspace = new Workspace(workspaceData);
    console.log(workspace)
    return await workspace.save();
};

const addMember = async(workspace) => {
    const findWorkspace = await Workspace.findOne({workspaceOwner: workspace.workspaceOwner, workspaceName: workspace.workspaceName})
    console.log(findWorkspace)
    console.log(workspace)
    const updated =  await Workspace.findByIdAndUpdate(findWorkspace._id, {
        $addToSet: { workspaceMembers: workspace.workspaceMembers } // avoids duplicates
      });
      console.log(updated)
      return updated
    // return await Workspace.findByIdAndUpdate(findWorkspace._id, project, { new: true });
}

const workspaceDelete = async(workspace) => {
    const findWorkspace = await Workspace.findOne({workspaceOwner: workspace.workspaceOwner, workspaceName: workspace.workspaceName})
    console.log(findWorkspace)
    return await Workspace.findByIdAndDelete(findWorkspace._id)
}

module.exports = { createNewWorkspace , addMember, workspaceDelete};
