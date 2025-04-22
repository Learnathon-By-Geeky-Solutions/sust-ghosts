// reminder.repository.js
const mongoose = require('mongoose');
const reminderSchema = require('./reminder.model')
const Reminder = mongoose.model('Reminder',reminderSchema);

const createNewReminder = async (reminderData) => {
    const newReminder = new Reminder(reminderData)
    console.log(reminderData,"kk")
    console.log(newReminder._id)
    return await newReminder.save()
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
    createNewReminder,
    findAll,
    findById,
    update,
    remove
};
