const express = require('express');
const NotFoundError = require('../errors/NotFoundError');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { loginValid, createUserValid } = require('../middlewares/celebrateValid');

const routes = express();

routes.post('/signin', loginValid, login);

routes.post('/signup', createUserValid, createUser);

routes.use(auth);
routes.use('/users', require('./users'));
routes.use('/movies', require('./movies'));

routes.use('*', (req, res, next) => {
  next(new NotFoundError('Странница не найдена'));
});

module.exports = routes;
