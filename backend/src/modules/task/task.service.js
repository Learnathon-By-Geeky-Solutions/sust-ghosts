const { 
    createNewTask, 
    taskUpdate, 
    taskDelete, 
    findTasksByProjectId,
    findTasksByAssignee,
    findTasksByAssignedBy
} = require('./task.repository');
const { findUserByMail } = require('../user/user.utility')
const createTask = async (req, res) => {
    try {
        const { name, assignee,assignedBy,projectId, dueDate, status, comment } = req.body;

        // Find user by their full name
        // const user = await findUserByMail(assignee);
        // if (!user) {
        //     return res.status(404).json({ error: 'User not found' });
        // }

        // Create task with user ID as assignee
        const taskData = {
            name,
            assignee,
            assignedBy,
            projectId,
            dueDate,
            status,
            comment,
            
        };

        const newTask = await createNewTask(taskData);
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
const updateTask = async(req, res)=>{
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
const deleteTask = async (req, res) => {
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

const getTasksByProjectId = async (req, res) => {
    try {
        const { projectId } = req.body;
        
        if (!projectId) {
            return res.status(400).json({ error: 'Project ID is required' });
        }
        
        const tasks = await findTasksByProjectId(projectId);
        
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for this project' });
        }
        
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getTasksByAssignee = async (req, res) => {
    try {
        const { assigneeId } = req.body;
        
        if (!assigneeId) {
            return res.status(400).json({ error: 'Assignee ID is required' });
        }
        
        const tasks = await findTasksByAssignee(assigneeId);
        
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for this assignee' });
        }
        
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getTasksByAssignedBy = async (req, res) => {
    try {
        const { assignedById } = req.body;
        
        if (!assignedById) {
            return res.status(400).json({ error: 'AssignedBy ID is required' });
        }
        
        const tasks = await findTasksByAssignedBy(assignedById);
        
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found that were assigned by this user' });
        }
        
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
module.exports = { 
    createTask, 
    updateTask, 
    deleteTask,
    getTasksByProjectId,
    getTasksByAssignee,
    getTasksByAssignedBy
};

module.exports = { createTask, updateTask, deleteTask };
