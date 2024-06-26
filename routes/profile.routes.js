const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Endpoint to get a profile by user_id

router.get('/profile/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const profile = await Profile.findByUserId(userId);

    if (!profile) {
      return res.status(404).send({ error: 'Profile not found' });
    }

    res.send(profile);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

module.exports = router;
