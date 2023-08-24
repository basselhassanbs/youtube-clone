module.exports = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).send({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};