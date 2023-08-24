const {
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  getTrend,
  getRandom,
  getByTags,
  search,
  createVideo,
  like,
  dislike,
  getVideos,
  getSubscriptions,
} = require('../controllers/video');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.post('/', auth, createVideo);
router.get('/', getVideos);
router.get('/trend', getTrend);
router.get('/random', getRandom);
router.get('/subscriptions', auth, getSubscriptions);
router.get('/tags', getByTags);
router.get('/search', search);
router.put('/:id', auth, updateVideo);
router.put('/:id/view', auth, addView);
router.delete('/:id', auth, deleteVideo);
router.get('/:id', getVideo);
router.put('/:id/like', auth, like);
router.put('/:id/dislike', auth, dislike);

module.exports = router;
