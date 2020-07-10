var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    firstName:String,
    lastName:String,    
    address:[{
        street:String,
        city:String,
        state:String,
        zip:String 
    }],
        phone:String        
});

var Person = mongoose.model('Person',PersonSchema);

module.exports = Person;


