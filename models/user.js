var mongoose = require("mongoose"),
    passportLocalMongoosse = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username:String,
    password:String,
   	firstname:String,
   	lastname:String,
   	bloodGroup:String,
   	contact:String,
   	country:String,
   	state:String,
   	city:String,
   	email:String,
   	status:Boolean,
});

userSchema.plugin(passportLocalMongoosse);
module.exports = mongoose.model("user",userSchema);