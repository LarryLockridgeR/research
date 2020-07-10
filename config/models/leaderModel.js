var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var officialSchema = new Schema ({
      firstName:String,
      lastName:String,
      branchOfGov:String,
      title:String,
      state:String,
      party:String,
      socialist:String,
      phone:String,
      email:String, 
});
   
var Official = mongoose.model('Official', officialSchema);

module.exports = Official;

