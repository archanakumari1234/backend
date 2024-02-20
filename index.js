require('dotenv').config()
const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hello World!</h1>');
})
app.get('/twitter', (req,res)=>{
    res.send('archana.com');
})
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
})