const OrganiseController = require('../controllers/organise.controller');

const express = require('express');
const router = express.Router();

router.get('/:id' , OrganiseController.getTasksForOrg);

module.exports = router;