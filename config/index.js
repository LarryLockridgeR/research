var configValues = require('./config');



module.exports = { getDbConnectionString(){
     //return 'mongodb+srv://terence:admin@cluster0-4xim2.mongodb.net/dbdemo?retryWrites=true&w=majority'
     //return 'mongodb+srv://admin:admin@cluster0-nyois.mongodb.net/dbdemo?retryWrites=true&w=majority'
     return 'mongodb+srv://Terence:admin@cluster0.4g9lx.mongodb.net/Cluster0?retryWrites=true&w=majority'
    },
    getOptions:function(){
        return {useNewUrlParser: true,useUnifiedTopology: true};
    }
}


//this is connection string for online mondo db ;
// mongoose.connect('mongodb+srv://terence:admin@cluster0-4xim2.mongodb.net/dbdemo?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true},methodtest);
// mongoose.connect('mongodb+srv://admin:admin@clmongodb+srv:
// function methodtest(ermsg){
//     console.log("error messages",ermsg);
//     console.log("==============================================","connection check")
// }todosUserName/Terencemongodb+srv://Terence:<password>@cluster0.4g9lx.mongodb.net/<dbname>?retryWrites=true&w=majority