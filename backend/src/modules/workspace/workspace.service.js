const { createNewWorkspace, addMember, workspaceDelete } = require('./workspace.repository');
const { findUserByMail } = require('../user/user.repository')
const createWorkspace = async (req, res) => {
    try {
        const { workspaceOwner, workspaceName } = req.body;

        // Find user by their full name
        const users = await findUserByMail(workspaceOwner);
        const user = users[0];
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const workspaceData = {
            workspaceOwner: user._id,
            workspaceName, 
            workspaceMembers: [user._id]
        };
        console.log(workspaceData)
        const newWorkspace = await createNewWorkspace(workspaceData);
        res.status(201).json({ message: 'Workspace created successfully', workspace: newWorkspace });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
const addMemberInWorkspace = async(req, res)=>{
    try {
        const { workspaceOwner, workspaceName, newMember} = req.body;
        const owners = await findUserByMail(workspaceOwner);
        const owner = owners[0];
        const members = await findUserByMail(newMember)
        const member = members[0];
        const workspace = {
            workspaceOwner: owner._id,
            workspaceName,
            workspaceMembers: member
        }
        const updatedWorkspace = await addMember(workspace);
        if (!updatedWorkspace) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(updatedWorkspace);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const deleteWorkspace = async (req, res) => {
    try {
        const { workspaceName, workspaceOwner } = req.body;
        const users = await findUserByMail(workspaceOwner);
        const user = users[0];
        const workspace = {
            workspaceOwner: user._id,
            workspaceName
        }
        console.log(workspace)
        const deletedProject = await workspaceDelete(workspace);

        if (!deletedProject) {
            return res.status(404).json({ error: 'Workspace not found' });
        }

        res.status(200).json({ message: 'Workspace deleted successfully', workspace: deleteWorkspace });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createWorkspace, addMemberInWorkspace, deleteWorkspace };
