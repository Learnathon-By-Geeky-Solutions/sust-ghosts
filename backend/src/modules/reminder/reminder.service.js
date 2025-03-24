const Reminder = require('./reminder.model');


const createReminder = async (reminderData) => {
    return await Reminder.create(reminderData);
};

const getAllReminders = async () => {
    return await Reminder.find().populate('assignee', 'email');
};


const getReminderById = async (reminderId) => {
    return await Reminder.findById(reminderId).populate('assignee', 'email');
};


const updateReminder = async (reminderId, updatedData) => {
    return await Reminder.findByIdAndUpdate(reminderId, updatedData, { new: true });
};

const deleteReminder = async (reminderId) => {
    return await Reminder.findByIdAndDelete(reminderId);
};

module.exports = {
    createReminder,
    getAllReminders,
    getReminderById,
    updateReminder,
    deleteReminder
};
