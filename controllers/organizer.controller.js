const orgnizerService = require('../services/organizer.service');

async function createOrganizer(req , res) {
    try {
        organizer = await orgnizerService.createOrganizer(req.body);
        return res.status(201).json(organizer);
    } catch (error) {
        return res.status(401).json(error);
    }
}


module.exports = {
    createOrganizer,
}