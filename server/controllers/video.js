const { validate, Video } = require('../models/Video');
const { User } = require('../models/user');

exports.createVideo = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }
  const video = new Video({
    user: req.user._id,
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    imgUrl: req.body.imgUrl,
    videoUrl: req.body.videoUrl,
  });
  await video.save();

  res.send(video);
};

exports.updateVideo = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }

  let video = await Video.findById(req.params.id);

  if (!video) {
    return res.status(404).send('The video with the given ID was not found.');
  }

  if (video.user.toString() !== req.user._id.toString()) {
    return res.status(403).send('Access denied');
  }

  video.set({
    title: req.body.title,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    videoUrl: req.body.videoUrl,
  });
  video = await video.save();

  res.send(video);
};

exports.deleteVideo = async (req, res) => {
  let video = await Video.findById(req.params.id);

  if (!video) {
    return res.status(404).send('The video with the given ID was not found.');
  }

  if (video.user.toString() !== req.user._id.toString()) {
    return res.status(403).send('Access denied');
  }

  video = await Video.findByIdAndRemove(req.params.id);

  res.send(video);
};

exports.getVideo = async (req, res) => {
  const video = await Video.findById(req.params.id)
    .populate('comments')
    .populate({ path: 'likes', select: '_id name' })
    .populate({ path: 'dislikes', select: '_id name' });
  if (!video) {
    return res.status(404).send('The video with the given ID was not found.');
  }
  res.send(video);
};

exports.getVideos = async (req, res) => {
  const videos = await Video.find()
    .populate({
      path: 'comments',
      select: '-video',
      populate: {
        path: 'user',
        select: '_id name',
      },
    })
    .populate({ path: 'likes', select: '_id name' })
    .populate({ path: 'dislikes', select: '_id name' })
    .populate({ path: 'user', select: '_id name img subscribers' });
  res.send(videos);
};

exports.addView = async (req, res) => {
  const video = await Video.findByIdAndUpdate(
    req.params.id,
    {
      $inc: { views: 1 },
    },
    { new: true }
  );

  if (!video) {
    return res.status(404).send('The video with the given ID was not found.');
  }

  res.send(video);
};

exports.getRandom = async (req, res) => {
  const videos = await Video.aggregate()
    .sample(40)
    .lookup({
      from: 'users',
      localField: 'user',
      foreignField: '_id',
      pipeline: [{ $project: { name: 1, img: 1 } }],
      as: 'user',
    })
    .unwind('user')
    .project({
      _id: 1,
      title: 1,
      imgUrl: 1,
      views: 1,
      createdAt: 1,
      user: 1,
    });

  res.send(videos);
};

exports.getTrend = async (req, res) => {
  const videos = await Video.find()
    .sort({ views: -1 })
    .select('_id title imgUrl views createdAt user')
    .populate('user', 'name img');

  res.send(videos);
};

exports.getSubscriptions = async (req, res) => {
  const user = await User.findById(req.user._id);

  const videos = await Video.find({
    user: { $in: user.subscribedUsers },
  })
    .select('_id title imgUrl views createdAt user')
    .populate('user', 'name img');

  res.send(videos);
};

exports.getByTags = async (req, res) => {
  const tags = req.query.tags.split(',');

  const videos = await Video.find({
    tags: { $in: tags },
  }).limit(20);

  res.send(videos);
};

exports.search = async (req, res) => {
  const query = req.query.q;
  const videos = await Video.find({
    title: { $regex: query, $options: 'i' },
  })
    .populate({ path: 'user', select: '_id name img subscribers' })
    .limit(40);

  res.send(videos);
};

exports.like = async (req, res) => {
  const video = await Video.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: { likes: req.user._id },
      $pull: { dislikes: req.user._id },
    },
    { new: true }
  )
    .populate({
      path: 'comments',
      select: '-video',
      populate: {
        path: 'user',
        select: '_id name',
      },
    })
    .populate({ path: 'likes', select: '_id name' })
    .populate({ path: 'dislikes', select: '_id name' })
    .populate({ path: 'user', select: '_id name img subscribers' });

  if (!video) {
    return res.status(404).send('The video with the given ID was not found.');
  }

  res.send(video);
};

exports.dislike = async (req, res) => {
  const video = await Video.findByIdAndUpdate(
    req.params.id,
    {
      $addToSet: { dislikes: req.user._id },
      $pull: { likes: req.user._id },
    },
    { new: true }
  )
    .populate({
      path: 'comments',
      select: '-video',
      populate: {
        path: 'user',
        select: '_id name',
      },
    })
    .populate({ path: 'likes', select: '_id name' })
    .populate({ path: 'dislikes', select: '_id name' })
    .populate({ path: 'user', select: '_id name img subscribers' });

  if (!video) {
    return res.status(404).send('The video with the given ID was not found.');
  }

  res.send(video);
};
