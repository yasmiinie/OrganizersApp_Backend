const { where } = require('sequelize');
const Task = require('../models/task.model');

async function createTask(dataTask) {
    return await Task.create(dataTask);
}

async function getTasks() {
    return await Task.findAll();
}

async function getTaskById(id) {
    return await Task.findByPk(id);
}

module.exports={
    createTask,
    getTasks,
    getTaskById
}