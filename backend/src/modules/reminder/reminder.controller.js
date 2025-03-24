// reminder.controller.js
const express = require('express');
const router = express.Router();
const reminderService = require('./reminder.service');

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
router.get('/', async (req, res) => {
    try {
        const reminders = await reminderService.getAllReminders();
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a reminder by ID
router.get('/:id', async (req, res) => {
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
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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
