const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// Public route
router.post('/', contactController.submitContact);

// Admin routes
router.get('/', authenticateToken, isAdmin, contactController.getMessages);
router.put('/:id/read', authenticateToken, isAdmin, contactController.markAsRead);

module.exports = router;
