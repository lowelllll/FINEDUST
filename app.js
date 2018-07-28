var express =  require('express')
, http = require('http')
, app = express()
, server = http.createServer(app)
, indexRouter = require('./routes/index')
, finedustRouter = require('./routes/finedust')
, bodyParser = require('body-parser');

// bodyparser middleware 사용
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','jade'); // template 
app.set('views','./views');

app.use('/',indexRouter);
app.use('/finedust',finedustRouter);

app.use(function(req,res,next){
    res.status(404).send(`Sorry can't not found page`);
});

server.listen(8000,function(){
    console.log('Express server listening on port 8000');
});