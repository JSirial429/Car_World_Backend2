const express =  require('express');
const router = express.Router();
//const cors = require('cors');
//const mongoose = require('mongoose');
const car = require('../model/car.model');

/* const corsOptions = {
    origin: '*',
} */

//router.use(cors)

/* router.post('/updateCar', cors(corsOptions), (req, res)=>{

    console.log('updateCar route called');

}); */

//Get all cars in DB
/* router.get('/cars', cors(corsOptions), (req, res)=>{

    console.log('get route called!');

    car.find({})
    .then( response =>{
        console.log("get car routes", response);
        res.status(200).json(response)
    })
    .catch( err =>{
        res.status(500).json(err);
    })
;
}); */

router.post('/car', (req, res)=>{

    /* const { vin, make, model, color, miles, transmission} = req.body;

    console.log("request body:", req.body);

    car.create({
        VIN: vin,
        make: make,
        model: model,
        color: color,
        miles: miles,
        transmission: transmission,
    })
    .then( response =>{
        console.log(response)
        res.status(200).json(response);
    })
    .catch( err =>{
        console.log(err);
        res.status(500).json({ "Status": err.toString() })
    }); */

    console.log('postCar route called');

});

/* router.post('/deleteCar', cors(corsOptions), (req, res)=>{

    console.log('delete car route called');

}); */

module.exports = router;