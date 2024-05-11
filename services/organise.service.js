const Organizer = require('../models/organizers.model');


async function getTasksForOrg(idOrg) {
    return await Organizer.findByPk(idOrg ,{
        include: 'tasks',
    });
}

async function addTaskToOrg(dataTask) {
    return await Organizer.addTask(dataTask);
}


module.exports ={
    getTasksForOrg,
    addTaskToOrg,
}