const db = require('../config/db');
const { DataTypes } = require('sequelize');

const Organizer = require('./organizers.model');
const Task = require('./task.model');



const Organise = db.define('Organise', {});

Organizer.belongsToMany(Task, { through: Organise, foreignKey: 'idOrg' });
Task.belongsToMany(Organizer, { through: Organise, foreignKey: 'idTask' });

module.exports = Organise;