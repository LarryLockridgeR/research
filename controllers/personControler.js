var Person = require('../config/models/personModel');

module.exports = function(app){

    app.get('/api/person', function(req,res){
        var starterPerson = [{
            firstName:"Alexander",
            lastName:"Love",
            address:[{
                street:"4454",
                city:"Canton",
                state:"Ga",
                zip:"30115"
            }]
         
        }]
            Person.create(starterPerson,function(err,result){
                res.send(result);
            });
        })
};
