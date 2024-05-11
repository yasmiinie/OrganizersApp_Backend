const Organizer = require('../models/organizers.model');

async function createOrganizer(dataOrg) {
   return await Organizer.create(dataOrg);
}

async function getOrganizers() {
    return await Organizer.findAll();
}

async function getOrgById(id) {
    return await Organizer.findByPk(id);
}

module.exports ={
    createOrganizer,
    getOrganizers,
    getOrgById
}