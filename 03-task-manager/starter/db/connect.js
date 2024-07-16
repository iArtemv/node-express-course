const mongoose = require('mongoose');

const connectDB = (url) => {

    return mongoose.connect(url, {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFinddAndModify: false, 
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;
