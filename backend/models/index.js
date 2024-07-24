const mongoose = require('mongoose');
const {DATABASE_URL} = process.env

// DATABASE CONNECTION
async function connectToMongo() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Connection with mongodb established');
    } catch (err) {
        console.error('Error connecting to mongodb', err.message);
    }
}

connectToMongo();

module.exports = {
    Weather: require('./Weather')
}