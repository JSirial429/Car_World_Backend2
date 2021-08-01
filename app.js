const express = require('express')
const app = express()
const cors =  require('cors');

//Load environement variables as soon as node server starts up
require('dotenv').config();

//Mongo DB Connection
require('./db.config');

const CarRoutes = require ('./src/routes/car.routes')

app.use(cors);

app.use('/', CarRoutes);

/* app.post('/cars', (req,res)=>{
    console.log("Post route called!");
})

app.get('/get', (req,res)=>{
    console.log("get route called")
}) */

app.listen(5000, ()=>{

    console.log('running on port 5000!');

});