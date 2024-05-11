const Task = require('../models/task.model');

async function createTask(dataTask) {
    return await Task.create(dataTask);
}

async function getTasks() {
    return await Task.findAll();
}

module.exports={
    createTask,
    getTasks,
}