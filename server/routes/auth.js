const express = require('express');
const { signup, signin } = require('../controllers/auth');
const router = express.Router();

//sign up
router.post('/signup', signup);

//sign in
router.post('/signin', signin);

module.exports = router;
