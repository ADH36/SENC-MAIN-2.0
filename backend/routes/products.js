const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:uuid', productController.getProduct);

// Admin routes
router.post('/', authenticateToken, isAdmin, productController.createProduct);
router.put('/:uuid', authenticateToken, isAdmin, productController.updateProduct);
router.delete('/:uuid', authenticateToken, isAdmin, productController.deleteProduct);

module.exports = router;
