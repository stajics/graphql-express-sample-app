const express = require('express');
// controllers
const authController = require('./controllers/AuthController');
// middleware
const isAuthenticated = require('./middleware/isAuthenticated');

module.exports = (app) => {
  const authRoutes = express.Router();
  const apiRoutes = express.Router();

  authRoutes.post('/signup', authController.signup);
  authRoutes.post('/login', authController.login);

  app.use('/auth', authRoutes);
  app.use('/api', isAuthenticated, apiRoutes);
};
