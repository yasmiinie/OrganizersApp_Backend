const organiseService = require('../services/organise.service'); 

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

module.exports = {
    getTasksForOrg,
}