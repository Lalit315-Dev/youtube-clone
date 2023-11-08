const mongoose = require('mongoose')
const Constants = require('../constants');

async function connectToDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${Constants.DB_NAME}`);
        console.log('Voila !! Connected to Mongo DB : ', connectionInstance.connection.host);
    } catch (error) {
        console.log('Error while connecting to DB : ', error);
    }
}

module.exports = connectToDB;