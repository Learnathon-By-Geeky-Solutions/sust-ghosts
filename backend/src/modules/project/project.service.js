const { createNewProject, projectUpdate, projectDelete } = require('./project.repository');
const { findUserByMail } = require('../user/user.utility')
const createProject = async (req, res) => {
    try {
        const { projectManager, projectName, projectDescription, endDate, startDate, teamId } = req.body;

        // Find user by their full name
        const users = await findUserByMail(projectManager);
        const user = users[0];
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create task with user ID as assignee
        const projectData = {
            projectManager: user._id,
            projectName, 
            projectDescription, 
            endDate, 
            startDate,
            teamId
        };

        const newProject = await createNewProject(projectData);
        res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
const updateProject = async(req, res)=>{
    try {
        const { projectManager, projectName, projectDescription, endDate, startDate } = req.body;
        const users = await findUserByMail(projectManager);
        const user = users[0];
        const project = {
            projectManager: user._id,
            projectName,
            projectDescription,
            endDate,
            startDate,
        }
        const updatedProject = await projectUpdate(project);
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const deleteProject = async (req, res) => {
    try {
        const { projectManager, projectName } = req.body;
        const users = await findUserByMail(projectManager);
        const user = users[0];
        const project = {
            projectManager: user._id,
            projectName
        }
        const deletedProject = await projectDelete(project);

        if (!deletedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully', project: deleteProject });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createProject, updateProject, deleteProject };
