   
const mongoose = require("mongoose");
//const uri = "mongodb://localhost/nutribyte";

const uri = process.env.MONGO_URI || "mongodb://localhost/nutribyte";

try {
    mongoose.connect(uri);
    console.log("Connected to Mongodb");
} catch (e) {
    console.log(e)
    console.log("Mongodb connection failed")
}

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas:', mongoose.connection.name);
});

module.exports =  mongoose;