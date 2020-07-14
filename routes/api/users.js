const express = require('express');
const router = express.Router();

const User = require('../../models/User')
// route   GET api/users/test
// desc    tests the users route
// access  public

router.get('/test', (req, res) => res.json({ msg: "users works" }))

// route   POST api/users/test
// desc    tests the users route
// access  public

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'Email Already Exists' })
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar: req.body.avatar,
                    password: req.body.password,
                })
            }
        })
})

module.exports = router