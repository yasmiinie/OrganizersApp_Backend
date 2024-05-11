const taskService = require('../services/task.service');

async function createTask(req , res){
    try{
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);

    }
    catch(err){
        res.status(401).json(err);
    }
}

module.exports ={
    createTask,
}