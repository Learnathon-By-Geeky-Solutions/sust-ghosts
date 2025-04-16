// reminder.service.js
const { create , findAll , findById , update , remove} = require('./reminder.repository')
const { findUserByMail } = require('../user/user.repository')
const createReminder = async (req,res) => {
    try{
        const { assignee,desc,time, status} = req.body;
        // Find user by their full name
        const users = await findUserByMail(assignee);
        const user = users[0];

        console.log(users)
        console.log(assignee)
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const newReminderData = {
            assignee: user._id,
            desc,
            time,
            status 
        }
        console.log(newReminderData)
        // Additional business logic can be added here if needed
        return await create(newReminderData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getAllReminders = async () => {
    return await reminderRepository.findAll();
};

const getReminderById = async (reminderId) => {
    return await reminderRepository.findById(reminderId);
};

const updateReminder = async (reminderId, updatedData) => {
    return await reminderRepository.update(reminderId, updatedData);
};

const deleteReminder = async (reminderId) => {
    return await reminderRepository.remove(reminderId);
};

module.exports = {
    createReminder,
    getAllReminders,
    getReminderById,
    updateReminder,
    deleteReminder
};
