var cors = require('cors');
const cookieParser = require('cookie-parser');
require('express-async-errors');
const users = require('../routes/users');
const videos = require('../routes/videos');
const comments = require('../routes/comments');
const auth = require('../routes/auth');
const express = require('express');
const error = require('../middleware/error');

module.exports = (app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/videos', videos);
  app.use('/api/videos', comments);
  app.use(error);
};
