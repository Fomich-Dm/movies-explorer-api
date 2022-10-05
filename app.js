const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');

const routes = require('./routes/index');
const errorHandler = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { mongoUrl, PORT } = require('./utils/constants');

const app = express();

app.use(cors());
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
});

app.use(express.json());

app.use(requestLogger);

app.use(helmet());

app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {});
