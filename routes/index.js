const express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/',function(req,res){
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
    }}

    res.render('index2',{_title:'Jade',data:district_arr});
})

module.exports = router;