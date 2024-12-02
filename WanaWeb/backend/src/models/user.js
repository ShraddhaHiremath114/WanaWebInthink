const mongoose = require("../configuration/dbConfig");

const userSchema=new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    role:{type:String, enum:["admin","supervisor"], default:"supervisor"}

});

module.exports = mongoose.model("User",userSchema);