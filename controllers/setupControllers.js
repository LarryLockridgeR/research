var Todos = require('../config/models/todomodel');

module.exports = function(app){

    app.get('/api/setupTodos', function(req,res){
        var starterTodos = [
            {
                username:'Alex',
                todo:'Wash Cars',
                isDone:'false',
                hasAttachment:'false',
                pid:'2'
            },
            {
                username:'Fred',
                todo:'Find a fishing spot',
                isDone:'false',
                hasAttachment:'false',
                pid:'3'
            }
        ];
                Todos.create(starterTodos,function(err,result){
                    res.send(result);
                })
               
        });
    }