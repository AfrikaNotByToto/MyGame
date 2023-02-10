/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

const express = require('express');
const db = require('./db/models');
const config = require('./config/config');
const apiUsersRoute = require('./routes/users.routes');
const apiAuthRoute = require('./routes/auth.routes');
// const apiMainRoute = require('./routes/main.routes');

const app = express();
const PORT = process.env.PORT || 4000;

config(app);

app.use('/api/users', apiUsersRoute);
app.use('/api/auth', apiAuthRoute);
// app.use('/', apiMainRoute);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Сервер слушает ${PORT} порт`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
