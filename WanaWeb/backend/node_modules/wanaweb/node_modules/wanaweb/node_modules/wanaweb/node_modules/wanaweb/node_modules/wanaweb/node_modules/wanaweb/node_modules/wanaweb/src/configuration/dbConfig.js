const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/wanawebdb",{
    serverSelectionTimeoutMS:5000
});

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongodb");
});

mongoose.connection.on("error",()=>{
    console.log(`mongodb connection error:${err}`);
});

module.exports = mongoose;