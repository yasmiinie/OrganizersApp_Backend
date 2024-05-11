const Organizer = require('../models/organizers.model');
const Organise = require('../models/orgnise.model');


async function getTasksForOrg(idOrg) {
    return await Organizer.findByPk(idOrg ,{
        include: 'tasks',
    });
}

async function addTaskToOrg(idO, idT ) {
    return await Organise.create({
        idOrg: idO,
        idTask: idT
    });
}


module.exports ={
    getTasksForOrg,
    addTaskToOrg,
}