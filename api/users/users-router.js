const express = require("express");
const Users = require("./users-model");
const Post = require("../posts/posts-model");
const {
  validateUserId,
  validateUser,
  validatePost,
} = require("../middleware/middleware");

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    req.body = await Users.get();
    res.status(200).json(req.body);
    next();
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateUserId, async (req, res, next) => {
  res.json(req.user);
});

router.post("/", validateUser, async (req, res) => {
  const user = await Users.insert(req.body);
  res.status(200).json(user);
});

router.put("/:id", [validateUserId, validateUser], async (req, res) => {
  const { id } = req.params;
  const user = await Users.update(id, req.body);
  res.status(200).json(user);
});

router.delete("/:id", validateUserId, async (req, res) => {
  const { id } = req.params;
  await Users.remove(id);
  res.status(200).json(req.user);
});

router.get("/:id/posts", (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post("/:id/posts", (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});
// do not forget to export the router
module.exports = router;
