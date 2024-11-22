const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createdUser(userData){
    const { name,email,password} = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
        name,
        email,
        password:hashedPassword,
        role:"supervisor"
    });

    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = {createdUser};