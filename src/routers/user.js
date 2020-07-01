const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.get("/comments", async (req, res) => {
  const comments = await User.find().sort({'updatedAt': -1})
  res.json(comments)
});
router.post("/comments", async (req, res) => {
  const user = new User(req.body);
  console.log(req)
  console.log(user)
  try {
    await user.save();

    res.status(201).send({ user });
  } catch ({ message }) {
    res.status(400).send({ error: message });
  }
});


module.exports = router;
