// routes/admin.js
const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../model/userData'); // Ensure this is the correct path to your User model

const router = express.Router();

// Middleware to verify if the user is an admin
const isAdmin = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'my_super_secret_key'); // Replace with environment variable in production
    const user = await userModel.findById(decoded.userId);

    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied, admin only' });
    }

    req.user = user; // Attaching the user to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

// Example of a protected admin route
router.post('/admin-action', isAdmin, (req, res) => {
  res.send('This is a protected admin route');
});

module.exports = router;
