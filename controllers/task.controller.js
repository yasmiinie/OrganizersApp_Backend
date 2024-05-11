const taskService = require('../services/task.service');

async function createTask(req , res){
    try{
        const task = await taskService.createTask(req.body);
        return res.status(201).json(task);

    }
    catch(err){
        return res.status(401).json(err);
    }
}

async function getTasks(req ,res) {
    try {
        const task = await taskService.getTasks();
        return res.status(201).json(task);

    } catch (error) {
        return res.status(401).json(error);
    }
}

async function getTaskById(req , res) {
    try {
        const task = await taskService.getTaskById(req.params.id);
        if(!task){
            return res.status(404).json({ error: 'Task not found' });
        }
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports ={
    createTask,
    getTasks,
    getTaskById,
}