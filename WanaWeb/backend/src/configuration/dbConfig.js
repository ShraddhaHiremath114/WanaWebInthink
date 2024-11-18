const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wanawebdb");

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongodb");
});

mongoose.connection.on("error",()=>{
    console.log(`mongodb connection error:${err}`);
});

module.exports = mongoose;