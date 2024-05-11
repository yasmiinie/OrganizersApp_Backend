const db = require('../config/db');
const { DataTypes } = require('sequelize');
const Organizer = require('./organizers.model');

const Task = db.define('Task', {
    idTask: { type: DataTypes.INTEGER,
        primaryKey: true},
    
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    location : DataTypes.STRING,
    day : DataTypes.INTEGER,
    time:  DataTypes.TIME,
    type:  DataTypes.ENUM('CheckIn', 'Normal', 'Supervision'),
    late:  DataTypes.BOOLEAN,
    finished:DataTypes.BOOLEAN,
    idSupervisor:DataTypes.INTEGER
})

Task.belongsTo(Organizer,{foreignKey: 'idSupervisor' , as: 'supervisor'} );

module.exports = Task;