const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name : String ,
    email: String , 
   password: String ,
});

const register = mongoose.model('register', registerSchema);
module.exports = register