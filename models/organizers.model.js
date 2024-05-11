const db = require('../config/db');
const { DataTypes } = require('sequelize');

const Organizer = db.define('Organizer',{
    idOrg: {type :DataTypes.INTEGER,
        primaryKey: true},
    
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    free: DataTypes.BOOLEAN,
    absent: DataTypes.BOOLEAN,
    job: DataTypes.ENUM('Bureau', 'Dev', 'Relev', 'Multimedia', 'Design', 'Comm', 'UX')
    
});

module.exports= Organizer;
