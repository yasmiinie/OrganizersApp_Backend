require('dotenv').config(); 
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const PORT = process.env.PORT || 3000 ;

app.listen(PORT , ()=>{
    console.log(`✅ Server is running on http://localhost:${PORT}/`);
});

app.get('/',(req , res)=>{
    res.send("The backend server is running !")
});

// connect to the postgres database
const sequelize = new Sequelize(process.env.DB,{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // You might need to adjust this based on your PostgreSQL server setup
        }
    }
});

sequelize.sync().then(()=>{
    console.log('Database connected successfully!');
}).catch((err)=>{
    console.error(err);
});