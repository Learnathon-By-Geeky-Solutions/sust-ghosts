// reminder.repository.js
const mongoose = require('mongoose');
const reminderSchema = require('./reminder.model')
const Reminder = mongoose.model('Reminder',reminderSchema);

const create = async (reminderData) => {
    const newReminder = new Reminder(reminderData)
    console.log(newReminder)
    return newReminder;
};

const findAll = async () => {
    return await Reminder.find().populate('assignee', 'email');
};

const findById = async (reminderId) => {
    return await Reminder.findById(reminderId).populate('assignee', 'email');
};

const update = async (reminderId, updatedData) => {
    return await Reminder.findByIdAndUpdate(reminderId, updatedData, { new: true });
};

const remove = async (reminderId) => {
    return await Reminder.findByIdAndDelete(reminderId);
};

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
};
