const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.mongodUser}:${process.env.mongodPass}@cluster0.1fik8.mongodb.net/${process.env.mongodDB}?retryWrites=true&w=majority`

mongoose.connect(url,{

    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(x => console.log(`✅MongoDB connection established✅`))
.catch(err => console.error('Error connecting to MongoDB❌😥❌', err));

mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`))
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

exports.default = mongoose.connection;