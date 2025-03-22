const { createNewTask, findUserByMail, taskUpdate, taskDelete } = require('./task.repository');

const createTask = async (req, res) => {
    try {
        const { name, assignee, dueDate, status, comment } = req.body;

        // Find user by their full name
        const user = await findUserByMail(assignee);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Create task with user ID as assignee
        const taskData = {
            name,
            assignee: user._id,  // Store ObjectId instead of name
            dueDate,
            status,
            comment
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
module.exports = { createTask, updateTask, deleteTask };
