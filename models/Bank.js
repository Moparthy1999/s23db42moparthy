const mongoose = require("mongoose")
const bankSchema = mongoose.Schema({
Bank_Name: String,
Bank_Branch: String,
Bank_Code: String
})
module.exports = mongoose.model("Bank",
bankSchema)

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

