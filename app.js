require('dotenv').config(); 
const express = require('express');
const app = express();
const taskRouter = require('./routers/task.router');
const organizerRouter = require('./routers/organizer.router');

const PORT = process.env.PORT || 3000 ;

app.use(express.json());
app.use('/task', taskRouter);
app.use('/organizer', organizerRouter);

app.listen(PORT , ()=>{
    console.log(`\n✅ Server is running on http://localhost:${PORT}/`);
});

app.get('/',(req , res)=>{
    res.send("The backend server is running !")
});



module.exports = app;