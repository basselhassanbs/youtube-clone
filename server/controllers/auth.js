const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { validateUser, User } = require('../models/user');

exports.signup = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const existingEmail = await User.findOne({ email: req.body.email });
  if (existingEmail) {
    return res.status(400).send('Email is in use');
  }

  const existingName = await User.findOne({ name: req.body.name });
  if (existingName) {
    return res.status(400).send('Name is in use');
  }

  let user = new User(_.pick(req.body, ['name', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  const userOb = _.pick(user, [
    '_id',
    'name',
    'email',
    'img',
    'subscribers',
    'subscribedUsers',
  ]);

  res.send({ ...userOb, token });
};

exports.signin = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('Invalid email or password.');
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send('Invalid email or password.');
  }

  const token = user.generateAuthToken();
  const userOb = _.pick(user, [
    // '_id',
    'name',
    // 'email',
    'img',
    'subscribers',
    'subscribedUsers',
  ]);
  res
    // .cookie('access_token', token, {
    //   httpOnly: true,
    // })
    .send({ ...userOb, token });
};

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(req);
}
