const { createNewProject, projectUpdate, projectDelete } = require('./project.repository');
const { findUserByMail } = require('../user/user.repository')
const createProject = async (req, res) => {
    try {
        const { projectManager, projectName, projectDescription, endDate, startDate } = req.body;

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
            startDate
        };

        const newProject = await createNewProject(taskData);
        res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
const updateProject = async(req, res)=>{
    try {
        const updatedTask = await taskUpdate(req.params.id, req.body);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;  // Extract task ID from URL

        const deletedTask = await taskDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully', task: deletedTask });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createProject, updateProject, deleteProject };
