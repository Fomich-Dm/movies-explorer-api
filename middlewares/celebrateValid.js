const { celebrate, Joi } = require('celebrate');
const { regEx } = require('../utils/constants');

module.exports.loginValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports.createUserValid = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports.userInfoValid = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email().required(),
  }),
});

module.exports.createMovieValid = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regEx),
    trailerLink: Joi.string().required().pattern(regEx),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(regEx),
    movieId: Joi.number().required(),
  }),
});

module.exports.deleteMovieValid = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex(),
  }),
});
