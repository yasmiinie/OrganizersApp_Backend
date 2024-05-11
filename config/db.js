const { Sequelize } = require('sequelize');

// connect to the postgres database
const sequelize = new Sequelize(process.env.DB,{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    }
});

sequelize.sync().then(()=>{
    console.log('\n✅ Database connected successfully !');
}).catch((err)=>{
    console.error(err);
});

module.exports = sequelize;