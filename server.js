const   express     = require('express'),
        app         = express(),
        path        = require('path'),
        bodyParser  = require('body-parser'),
        PORT        = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));


app.get('/', function(req, res, next){

    res.sendFile(path.join(__dirname+'/pages/index.html'));
    console.log(req.body);
});

app.get('/getdata', function(req, res, next){
    res.sendFile(path.join(__dirname+'/data/dataset.xml'));
});

app.listen(PORT, function(){
    console.log('Server is listening on port ' + PORT);
});