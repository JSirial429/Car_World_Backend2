const express =  require('express');
const router = express.Router();
const cors = require('cors');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const car = require('../models/car.model');

/* const corsOptions = {
    origin: '*',
} */

router.use(cors());

/* router.post('/updateCar', (req, res)=>{

    console.log('updateCar route called');

}); */

//Get all cars in DB
router.get('/cars', (req, res)=>{

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
});

router.post('/car', (req, res)=>{

    const { vin, make, model, color, mileage, transmission} = req.body;

    console.log("request body:", req.body);

    car.create({
        VIN: vin,
        Make: make,
        Model: model,
        Color: color,
        Miles: mileage,
        Transmission: transmission,
    })
    .then( response =>{
        console.log(response)
        res.status(200).json(response);
    })
    .catch( err =>{
        console.log(err);
        res.status(500).json({ "Status": err.toString() })
    });

    console.log('postCar route called');

});

router.delete('/deleteCar/:vin', (req, res)=>{

    
    const { vin } = req.params;
    console.log('delete car route called and soon to be deleted VIN: ', vin);


    //console.log("delete route called!");

    car.deleteOne({ VIN: [vin] })
    .then( response =>{
        console.log(response);
        res.status(200).json(response)
    })
    .catch( err =>{
        console.log(err);
        res.status(500).json({ "status": err.toString() });
    });

});

module.exports = router;