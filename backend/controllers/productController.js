const { v4: uuidv4 } = require('uuid');
const { pool } = require('../config/database');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const [products] = await pool.execute(
      'SELECT uuid, name, description, image_url, website_url, category, is_active, created_at FROM products WHERE is_active = true ORDER BY created_at DESC'
    );

    res.json(products.map(p => ({
      uuid: p.uuid,
      name: p.name,
      description: p.description,
      imageUrl: p.image_url,
      websiteUrl: p.website_url,
      category: p.category,
      isActive: p.is_active,
      createdAt: p.created_at
    })));
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get single product
const getProduct = async (req, res) => {
  const { uuid } = req.params;

  try {
    const [products] = await pool.execute(
      'SELECT uuid, name, description, image_url, website_url, category, is_active, created_at FROM products WHERE uuid = ?',
      [uuid]
    );

    if (products.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const p = products[0];
    res.json({
      uuid: p.uuid,
      name: p.name,
      description: p.description,
      imageUrl: p.image_url,
      websiteUrl: p.website_url,
      category: p.category,
      isActive: p.is_active,
      createdAt: p.created_at
    });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create product (admin only)
const createProduct = async (req, res) => {
  const { name, description, imageUrl, websiteUrl, category } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Product name is required' });
  }

  try {
    const productUuid = uuidv4();

    await pool.execute(
      'INSERT INTO products (uuid, name, description, image_url, website_url, category) VALUES (?, ?, ?, ?, ?, ?)',
      [productUuid, name, description || '', imageUrl || '', websiteUrl || '', category || '']
    );

    res.status(201).json({
      message: 'Product created successfully',
      product: {
        uuid: productUuid,
        name,
        description,
        imageUrl,
        websiteUrl,
        category
      }
    });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update product (admin only)
const updateProduct = async (req, res) => {
  const { uuid } = req.params;
  const { name, description, imageUrl, websiteUrl, category, isActive } = req.body;

  try {
    const [existing] = await pool.execute(
      'SELECT id FROM products WHERE uuid = ?',
      [uuid]
    );

    if (existing.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await pool.execute(
      'UPDATE products SET name = COALESCE(?, name), description = COALESCE(?, description), image_url = COALESCE(?, image_url), website_url = COALESCE(?, website_url), category = COALESCE(?, category), is_active = COALESCE(?, is_active) WHERE uuid = ?',
      [name, description, imageUrl, websiteUrl, category, isActive, uuid]
    );

    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete product (admin only)
const deleteProduct = async (req, res) => {
  const { uuid } = req.params;

  try {
    const [result] = await pool.execute(
      'DELETE FROM products WHERE uuid = ?',
      [uuid]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
