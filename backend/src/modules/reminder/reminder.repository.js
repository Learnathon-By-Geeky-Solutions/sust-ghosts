// reminder.repository.js
const Reminder = require('./reminder.model');

const create = async (reminderData) => {
    return await Reminder.create(reminderData);
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
