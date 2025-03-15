const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create Task
router.post('/', authMiddleware, async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = new Task({ title, description, userId: req.user.userId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Error creating task' });
    }
});

// Get Tasks
router.get('/', authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.userId });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching tasks' });
    }
});

// Update Task
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: 'Error updating task' });
    }
});

// Delete Task
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting task' });
    }
});

module.exports = router;
