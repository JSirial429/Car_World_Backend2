const express = require('express')
const app = express()
const cors =  require('cors');

//Load environement variables as soon as node server starts up
require('dotenv').config();

//Mongo DB Connection
require('./db.config');


app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const CarRoutes = require ('./src/routes/car.routes')

//app.use(cors());

app.use('/', CarRoutes);

/* app.post('/cars', (req,res)=>{
    console.log("Post route called!");
})

app.get('/get', (req,res)=>{
    console.log("get route called")
}) */

//process.env.PORT || 

app.listen(process.env.PORT || 3000, ()=>{

    console.log('running on port 3000!');

});