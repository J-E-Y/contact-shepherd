const { Router } = require('express');
const express = require('express');
const router = express.Router();

// @ Route    get api/auth
// @ desc     Get Logged in user
// @ access   Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @ Route    POST api/auth
// @ desc     Auth User & get token
// @ access   Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
