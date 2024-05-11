const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

//Task routers 
router.post('/', taskController.createTask);
router.get('/',taskController.getTasks);


module.exports = router;