const organizerController = require('../controllers/organizer.controller');
const express = require('express');
const router = express.Router();

router.post('/',organizerController.createOrganizer);
router.get('/',organizerController.getOrganizers);

module.exports = router;
