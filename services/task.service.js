const Task = require('../models/task.model');

async function createTask(dataTask) {
    return await Task.create(dataTask);
}

module.exports={
    createTask,
}