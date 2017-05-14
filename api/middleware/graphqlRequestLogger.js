const winston = require('winston');

module.exports = (req, res, next) => {
  winston.info({
    date: new Date(),
    method: req.method,
    path: req.path,
    query: req.query,
    body: req.body,
    authorization: req.headers.authorization,
  });
  next();
};
