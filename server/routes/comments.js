const express = require('express');
const { deleteComment, createComment } = require('../controllers/comment');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/:videoId/comments', auth, createComment);
router.delete('/comments/:id', auth, deleteComment);

module.exports = router;
