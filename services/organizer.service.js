const Organizer = require('../models/organizers.model');

async function createOrganizer(dataOrg) {
   return await Organizer.create(dataOrg);
}

async function getOrganizers() {
    return await Organizer.findAll();
}

module.exports ={
    createOrganizer,
    getOrganizers,
}