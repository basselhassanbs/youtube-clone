const _ = require('lodash');
const Joi = require('joi');
const { User } = require('../models/user');

exports.updateUser = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  if (req.user._id !== req.params.id) {
    return res.status(403).send('Access denied');
    //you can update only your account!
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      img: req.body.img,
    },
    { new: true }
  );
  if (!user) {
    return res.status(404).send('The user with the given ID was not found.');
  }

  res.send(user);
};

exports.deleteUser = async (req, res) => {
  if (req.user._id !== req.params.id) {
    return res
      .status(403)
      .send('Access denied. You can delete only your acccount!');
  }

  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) {
    return res.status(404).send('The user with the given ID was not found');
  }

  res.send(user);
};

exports.getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).send('The user with the given ID was not found');
  }

  res.send(
    _.pick(user, ['_id', 'name', 'img', 'subscribers', 'subscribedUsers'])
  );
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('The user with the given ID was not found');
  }

  res.send(_.pick(user, ['name', 'img', 'subscribers']));
};

exports.getUsers = async (req, res) => {
  const users = await User.find().select(
    '_id name img subscribers subscribedUsers'
  );

  res.send(users);
};

exports.subscribe = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('The user with the given ID was not found');
  }

  let subscriber = await User.findById(req.user._id);

  if (subscriber.subscribedUsers.includes(req.params.id)) {
    return res
      .status(400)
      .send('The user with the given ID is already subscribed');
  }

  //increase the subscribers of the channel/user that you want to subscribe
  user.subscribers = user.subscribers + 1;
  user = await user.save();
  //add the id of the channel/user that you want to subscribe to
  // to your subscribed users array
  subscriber.subscribedUsers.push(req.params.id);
  subscriber = await subscriber.save();

  res.send(_.pick(user, ['_id', 'name', 'subscribers', 'subscribedUsers']));
};

exports.unsubscribe = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send('The user with the given ID was not found');
  }

  let subscriber = await User.findById(req.user._id);

  const index = subscriber.subscribedUsers.indexOf(req.params.id);
  if (index == -1) {
    return res
      .status(400)
      .send('The user with the given ID is already unsubscribed');
  }

  user.subscribers = user.subscribers - 1;
  user = await user.save();

  subscriber.subscribedUsers.splice(index, 1);
  subscriber = await subscriber.save();

  res.send(_.pick(user, ['_id', 'name']));
};

function validate(req) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50),
    img: Joi.string(),
  });
  return schema.validate(req);
}
