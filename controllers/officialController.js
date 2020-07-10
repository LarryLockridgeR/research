var OfficialPerson = require('../config/models/leaderModel');

module.exports = function(app){

    app.get('/api/official',function(req,res){
        var starterOfficial = [{
            fname:"Brian P.",
            lname:"Kemp",
            branchOfGov:"Georgia",
            title:"Governor",
            state:"Ga",
            party:"Republican",
            socialist:"Yes",
            phone:"404-656-1776"         
           
            }]       
            
            OfficialPerson.create(starterOfficial,function(err,result){
                res.send(result);
            });

            
        });
    }



