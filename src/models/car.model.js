const { Schema, model } = require('mongoose');

const carSchema = new Schema({

    VIN: {
        type: String,
        match: /\w{0,17}/,
        required: true,
        unique: true,
    },
    Make: {
        type: String,
    },
    Model: {
        type: String,
    },
    Miles: { 
        type: Number,
    },
    Color: {
        type: String,
    },
    Transmission: {
        type: String,
    }

}); 

const car = model('car', carSchema);

module.exports = car;