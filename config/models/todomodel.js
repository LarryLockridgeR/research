var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username:String,
    todo:String,
    isDone:String,
    hasattachment:Boolean,
    pid:String
    
});

var Todos = mongoose.model('Todos',todoSchema);

module.exports = Todos;