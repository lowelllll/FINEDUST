var express =  require('express')
, http = require('http')
, app = express()
, server = http.createServer(app)
, indexRouter = require('./routes/index')
, finedustRouter = require('./routes/finedust')
, bodyParser = require('body-parser')
,fs = require('fs');


// bodyparser middleware 사용
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public')); // static file serving

app.set('view engine','jade'); // template 
app.set('views','./views');

// 자동완성 변수를 위한 middleware 생성
app.get('/',function(request,response,next){
    var json = fs.readFileSync('./korea-administrative-district.json');
    var temp_datas = JSON.parse(json);
    var datas = temp_datas.data

    // 자동완성을 위한 배열 생성
    var district = [];
    for(var i=0; i<datas.length;i++){ // 지역 (서울,부산) 배열 생성(value 검색하는 데 사용)
        Array.prototype.push.apply(district,Object.keys(datas[i])); // apply ['123'] + ['34'] = ['123','34'] 배열 하나로 합치기 (concat과 살짝 다름)
    }

    var district_arr = [];
    for(var i=0; i<datas.length;i++){
        for(var j = 0; j<Object.keys(datas[i][district[i]]).length;j++){ 
            district_arr.push(district[i]+" "+datas[i][district[i]][j]);  // 배열 요소 추가
        }
    };

    request.district = district_arr;
    next(); // 다음 미들웨어를 호출
});

app.use('/',indexRouter);
app.use('/finedust',finedustRouter);

app.use(function(req,res,next){
    res.status(404).send(`Sorry can't not found page`);
});

server.listen(8000,function(){
    console.log('Express server listening on port 8000');
});