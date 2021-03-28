const { Router } = require('express');
const express = require('express');
const router = express.Router();

// @ Route    Get api/Contacts
// @ desc     Get all users contacts
// @ access   Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
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
