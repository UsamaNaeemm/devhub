const express = require('express');
const { route } = require('./users');
const router = express.Router();

// route   GET api/posts/test
// desc    tests the posts route
// access  public


router.get('/test', (req, res) => res.json({ msg: "posts works" }))

module.exports = router