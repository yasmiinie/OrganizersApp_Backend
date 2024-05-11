const organizerController = require('../controllers/organizer.controller');
const express = require('express');
const router = express.Router();

router.post('/',organizerController.createOrganizer);

module.exports = router;
