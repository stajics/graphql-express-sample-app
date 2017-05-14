const express = require('express');
// controllers
const authController = require('./controllers/AuthController');
// middleware
const isAuthenticated = require('./middleware/isAuthenticated');
const graphql = require('./middleware/graphql');
const graphqlRequestLogger = require('./middleware/graphqlRequestLogger');

module.exports = (app) => {
  const authRoutes = express.Router();
  const apiRoutes = express.Router();

  authRoutes.post('/signup', authController.signup);
  authRoutes.post('/login', authController.login);

  apiRoutes.use('/graphql', graphqlRequestLogger, graphql);

  app.use('/auth', authRoutes);
  app.use('/api', apiRoutes);

  // documentation
  app.use('/documentation', express.static('./documentation/swagger'));
  app.use('/docs', express.static('./documentation/documentation.yaml'));
};
