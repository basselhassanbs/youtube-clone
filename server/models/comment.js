const Joi = require('joi');
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video',
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

const validateComment = (video) => {
  const schema = Joi.object({
    description: Joi.string().required(),
  });
  return schema.validate(video);
};

exports.Comment = Comment;
exports.validate = validateComment;
