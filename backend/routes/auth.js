const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.get('/profile', authenticateToken, authController.getProfile);

// Master login API routes
router.post('/master-token', authenticateToken, authController.generateMasterToken);
router.post('/verify-token', authController.verifyMasterToken);
router.post('/revoke-token', authenticateToken, authController.revokeMasterToken);

module.exports = router;
