function logger(req, res, next) {
  const date = new Date();
  console.log(`
      REQUEST METHOD: ${req.method}
      REQUEST URL: ${req.originalUrl}
      TIMESTAMP: ${date.toLocaleString()}
    `);
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
