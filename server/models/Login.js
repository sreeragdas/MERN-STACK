const mongoose = require('mongoose')
const loginSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstname: {type:String,require:true},
    lastname:{type:String,require:true},
    password : {type:String,require:true}
});
module.exports = mongoose.model('Login',loginSchema);