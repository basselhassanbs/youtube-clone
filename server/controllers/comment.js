const { Video } = require('../models/Video');
const { Comment, validate } = require('../models/comment');

exports.createComment = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }

  const video = await Video.findById(req.params.videoId);
  if (!video) {
    return res.status(404).send('The video with the given ID was not found');
  }

  const comment = new Comment({
    user: req.user._id,
    video: video._id,
    description: req.body.description,
  });
  await comment.save();

  await Video.findByIdAndUpdate(req.params.videoId, {
    $push: { comments: comment._id },
  });

  res.send(comment);
};

exports.deleteComment = async (req, res) => {
  let comment = await Comment.findById(req.params.id);
  if (!comment) {
    return res.status(404).send('The video with the given ID was not found');
  }

  if (comment.user.toString() !== req.user._id) {
    return res.status(403).send('Access denied');
  }

  const video = await Video.findByIdAndUpdate(comment.video, {
    $pull: { comments: comment._id },
  });

  comment = await Comment.findByIdAndRemove(req.params.id);

  res.send(comment);
};
