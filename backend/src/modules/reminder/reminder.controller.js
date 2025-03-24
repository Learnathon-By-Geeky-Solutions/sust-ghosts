const express = require('express');
const router = express.Router();
const reminderService = require('./reminder.service');

Base_URL = "reminder"

// Controller and Routing combined

// Create a new reminder
router.post('/', async (req, res) => {
    try {
        const reminder = await reminderService.createReminder(req.body);
        res.status(201).json(reminder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Retrieve all reminders
router.get(Base_URL+'/getAll', async (req, res) => {
    try {
        const reminders = await reminderService.getAllReminders();
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a reminder by ID
router.get(Base_URL+'/:id', async (req, res) => {
    try {
        const reminder = await reminderService.getReminderById(req.params.id);
        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }
        res.status(200).json(reminder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a reminder
router.put(Base_URL+'/:id', async (req, res) => {
    try {
        const reminder = await reminderService.updateReminder(req.params.id, req.body);
        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }
        res.status(200).json(reminder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a reminder
router.delete(Base_URL+'/:id', async (req, res) => {
    try {
        const reminder = await reminderService.deleteReminder(req.params.id);
        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }
        res.status(200).json({ message: 'Reminder deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
