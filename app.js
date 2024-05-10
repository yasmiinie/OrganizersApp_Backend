const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.listen(PORT , ()=>{
    console.log(`✅ Server is running on http://localhost:${PORT}/`);
});

app.get('/',(req , res)=>{
    res.send("The backend server is running !")
});