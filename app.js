var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var cors = require('cors');
var path = require('path');
var route = require('./routes/route');

var app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost:27017/contactList');
mongoose.connection.on('connected',() =>{
    console.log('Connected to mongo db @ 27017');

});
mongoose.connection.on('error',(err) =>{
   if(err){
       console.log('Error on dummy connecting mongo db', +err);
   }
   else {
    console.log('connected to '+ url);
    db.close();
}
    
});

const port = 3000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use('/api', route);
app.get('/',(req, res) => {
    res.send('goodnight');
});
app.listen(port,() =>{
    console.log('server started at port no :',+port);
})