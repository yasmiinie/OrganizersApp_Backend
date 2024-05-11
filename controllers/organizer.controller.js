const Organizer = require('../models/organizers.model');
const orgnizerService = require('../services/organizer.service');

async function createOrganizer(req , res) {
    try {
        organizer = await orgnizerService.createOrganizer(req.body);
        return res.status(201).json(organizer);
    } catch (error) {
        return res.status(401).json(error);
    }
}

async function getOrganizers(req ,res) {
    try {
        const org = await orgnizerService.getOrganizers();
        return res.status(201).json(org);

    } catch (error) {
        return res.status(401).json(error);
    }
}

async function getOrgById(req , res) {
    try {
        const org = await orgnizerService.getOrgById(req.params.id);
        if(!org){
            return res.status(404).json({ error: 'Organizer not found' });
        }
        return res.status(200).json(org);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    createOrganizer,
    getOrganizers,
    getOrgById,
}
