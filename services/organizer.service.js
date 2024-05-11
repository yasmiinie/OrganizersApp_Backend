const Organizer = require('../models/organizers.model');

async function createOrganizer(dataOrg) {
   return await Organizer.create(dataOrg);
}

module.exports ={
    createOrganizer,
}