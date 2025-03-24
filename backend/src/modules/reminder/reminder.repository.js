const mongoose = require('mongoose');
const userSchema = require('../user/user.model')
const User = mongoose.model('User',userSchema);
const Reminder = mongoose.model(require('./reminder.model'));





// CRUD operations for reminder
const createReminder = async (reminderData) => {
    const reminder = new Reminder(reminderData);
    return await reminder.save();
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