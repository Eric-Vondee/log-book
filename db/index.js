const mongoose = require('mongoose');
const config = require('../config');

module.exports = async() =>{
    try{
        //connect to mongodb
        await mongoose.connect(
            process.env.NODE_ENV === 'production'?
            config.MONGO_URI: 'mongodb+srv://logbook:U5a7WmfqUvd0jFFM@logbook-app.6elbk.mongodb.net/logbook-app?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
				autoIndex: process.env.NODE_ENV === 'production' ? false : true,
				useCreateIndex: true,
				useUnifiedTopology: true
            }
        )
        return console.log('Mongodb Connected')
    }
    catch(error){
        console.log(error)
    }
}