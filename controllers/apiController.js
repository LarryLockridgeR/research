var Todos = require('../config/models/todomodel');
var Leaders = require('../config/models/leaderModel');

var bodyParser = require('body-parser');

module.exports = function(app){

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

        app.get('/api/leaders',function(req,res){
            Leaders.find(req.body,function(err,result){               
                if(err) throw err;                
                res.send(result);
            });
        });
        app.get('/api/deleteLeader/:id',function(req,res){
            Leaders.findOneAndRemove({_id:req.params.id},function(err,result){
                if(err) throw err;
                res.send("Success");
            })
        });
        
        app.post('/api/postLeader',function(req,res){
            if(req.body.id) {
              Leaders.findByIdAndUpdate(req.body.id, {
                  Leaders:req.body.Leaders,
                  firstName:req.firstName,
                  lastName:req.body.lastName,
                  branchOfGov:req.body.branchOfGov,
                  title:req.body.title, 
                  state:req.body.state,
                  party:req.body.party,
                  socialist:req.body.socialist,
                  phone:req.body.phone,
                  email:req.body.email 
                 });    
        }
          else{
                newLeaders= new Leaders({
                branchOfGov:req.body.branchOfGov,
                title:req.body.title,
                state:req.body.state,
                party:req.body.party,
                socialist:req.body.socialist,
                phone:req.body.phone, 
            });               
                newLeaders.save(function(err){
                    if(err) throw err;
                    res.send('Success');
                }); 

                app.delete('/api/deleteLeader/:id',function(req,res){
                    Leaders.findByIdAndDelete({_id:req.params.id},function(err){
                        if(err) throw error;
                        res.send("Delete Success");
                    })
                })  

                app.update('/api/updateLeader/:id', function(req,res){
                    Leaders.findByIdAndUpdate({_id:req.params.id},function(err){
                        if(err) throw error;
                        res.send("Update Success")
                    })
                })
        
    }});

    /* app.delete('/api/deleteLeader/:id',function(req,res){
        Leaders.findByIdAndDelete({_id:req.params.id},function(err){
            if(err) throw error;
            res.send("Delete Success");
        })
    })   */

    
}
           