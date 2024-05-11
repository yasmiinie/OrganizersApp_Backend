const organiseService = require('../services/organise.service'); 
const taskService = require('../services/task.service');
const organizerService = require('../services/organizer.service');
const Organizer = require('../models/organizers.model');
const Organise = require('../models/orgnise.model')

async function getTasksForOrg(req , res) {
    try {
        const org = await organiseService.getTasksForOrg(req.params.id);
        if (!org) {
            return res.status(404).json({ error: 'Organizer not found' });
        }
        return res.status(200).json(org);
        
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    
}

async function addTaskToOrg(req, res) {
    const { idO , idT } = req.params ;
    console.log(idO);
   
    try {
        const org = await organizerService.getOrgById(idO);
        const task = await taskService.getTaskById(idT);

        if (!task || !org){
            return res.status(404).json({ error: 'Organizer or task not found' });
        }


          // Check if the task already exists in the organization
          //const orgTasks = await organiseService.getTasksByOrgId(idO);
          //if (orgTasks.includes(idT)) {
          //    return res.status(400).json({ error: 'Task already exists in the organization' });
          //}
          
          
        const added = await organiseService.addTaskToOrg(idO, idT);
        return res.status(200).json(added);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
    
 


module.exports = {
    getTasksForOrg,
    addTaskToOrg,
}