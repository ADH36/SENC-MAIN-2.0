const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { pool } = require('../config/database');
require('dotenv').config();

// Register a new user
const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userUuid = uuidv4();

    // Insert new user
    const [result] = await pool.execute(
      'INSERT INTO users (uuid, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
      [userUuid, email, hashedPassword, firstName || '', lastName || '']
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        uuid: userUuid,
        email,
        firstName,
        lastName
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Find user
    const [users] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = users[0];

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        uuid: user.uuid,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        uuid: user.uuid,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get current user profile
const getProfile = async (req, res) => {
  try {
    const [users] = await pool.execute(
      'SELECT uuid, email, first_name, last_name, role, created_at FROM users WHERE id = ?',
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = users[0];
    res.json({
      uuid: user.uuid,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      role: user.role,
      createdAt: user.created_at
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Master Login API - Generate token for other applications
const generateMasterToken = async (req, res) => {
  const { appName } = req.body;

  if (!appName) {
    return res.status(400).json({ error: 'Application name is required' });
  }

  try {
    // Generate a special token for cross-application authentication
    const masterToken = jwt.sign(
      {
        id: req.user.id,
        uuid: req.user.uuid,
        email: req.user.email,
        role: req.user.role,
        appName
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Store the token in the database
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
    await pool.execute(
      'INSERT INTO auth_tokens (user_id, token, app_name, expires_at) VALUES (?, ?, ?, ?)',
      [req.user.id, masterToken, appName, expiresAt]
    );

    res.json({
      message: 'Master token generated successfully',
      token: masterToken,
      expiresAt,
      appName
    });
  } catch (error) {
    console.error('Generate master token error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Verify master token (for other applications to validate)
const verifyMasterToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if token exists in database and is not expired
    const [tokens] = await pool.execute(
      'SELECT * FROM auth_tokens WHERE token = ? AND expires_at > NOW()',
      [token]
    );

    if (tokens.length === 0) {
      return res.status(401).json({ error: 'Token not found or expired' });
    }

    // Get user details
    const [users] = await pool.execute(
      'SELECT uuid, email, first_name, last_name, role FROM users WHERE id = ?',
      [decoded.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = users[0];
    res.json({
      valid: true,
      user: {
        uuid: user.uuid,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role
      }
    });
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    console.error('Verify master token error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Revoke master token
const revokeMasterToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    await pool.execute(
      'DELETE FROM auth_tokens WHERE token = ? AND user_id = ?',
      [token, req.user.id]
    );

    res.json({ message: 'Token revoked successfully' });
  } catch (error) {
    console.error('Revoke token error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  generateMasterToken,
  verifyMasterToken,
  revokeMasterToken
};
