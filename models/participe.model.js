const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Assuming you have sequelize instance initialized

const Task = require('./task.model');
const Participant = require('./participant.model');


const Participe = sequelize.define('Participe', {
    scan: DataTypes.BOOLEAN
});


Participant.belongsToMany(Task, { through: Participe, foreignKey: 'idParticipant' });
Task.belongsToMany(Participant, { through: Participe, foreignKey: 'idTask' });

module.exports = Participe;
