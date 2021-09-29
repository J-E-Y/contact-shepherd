const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @ Route    Get api/Contacts
// @ desc     Get all users contacts
// @ access   Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @ Route    POST api/contacts
// @ desc     Add New contact
// @ access   Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @ Route    put api/contacts/:id
// @ desc     Update contact
// @ access   Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @ Route    Delete api/contacts/:id
// @ desc     Delete contact
// @ access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
