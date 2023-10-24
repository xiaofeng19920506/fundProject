const mongoose = require('mongoose');

async function dbConnect() {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database is connected");
    }).catch((error)=> {
        console.log("There is error while connecting database", error);
    });
}

module.exports = dbConnect;