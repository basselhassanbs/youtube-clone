const express = require('express');
const auth = require('../middleware/auth');
const {
  updateUser,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  getCurrentUser,
  getUsers,
} = require('../controllers/user');
const router = express.Router();

router.put('/:id', auth, updateUser);

router.delete('/:id', auth, deleteUser);

router.get('/me', auth, getCurrentUser);

router.get('/:id', getUser);

router.get('/', getUsers);

router.put('/:id/subscribe', auth, subscribe);

router.put('/:id/unsubscribe', auth, unsubscribe);

module.exports = router;
