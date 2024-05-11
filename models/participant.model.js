const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Assuming you have sequelize instance initialized

const Participant = sequelize.define('Participant', {
    idParticipant: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.INTEGER
});

module.exports = Participant;
