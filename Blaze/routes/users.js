const User = require("../models/user");

const express = require('express');
const router  = express.Router();

const bcrypt = require("bcryptjs");

const passport = require("passport");

const async = require('async');


router.get('/signup', (res, req, next) => {
  res.render('users/signup')
})




module.exports = router;