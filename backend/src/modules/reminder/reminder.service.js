// reminder.service.js
const reminderRepository = require('./reminder.repository');

const createReminder = async (reminderData) => {
    // Additional business logic can be added here if needed
    return await reminderRepository.create(reminderData);
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
