const OrganiseController = require('../controllers/organise.controller');

const express = require('express');
const router = express.Router();

router.get('/:id' , OrganiseController.getTasksForOrg);
router.post('/:idO/task/:idT', OrganiseController.addTaskToOrg);

module.exports = router;