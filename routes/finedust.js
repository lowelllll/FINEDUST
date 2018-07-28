var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/city',function(req,res){
  const ServiceKey = "%2Fi9G3u9IiKGAUwHWqz%2FHganxLxlIopwPFbXkIBufTEeCEYL3MyEmUPxm9f42AkbI%2Fp6QH5hZBQC%2BJLagWGm3%2Bw%3D%3D";
  var body = req.body;
  var city = body.city;
  var request_url = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
  var result;

  var queryParams = '?' + encodeURIComponent('ServiceKey') + `=${ServiceKey}`; /* Service Key*/
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 */
  queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent(city); /* 시도 이름 (서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종) */
  queryParams += '&' + encodeURIComponent('ver') + '=' + encodeURIComponent('1.3'); /* 버전별 상세 결과 참고문서 참조 */
  


  request({
    url: request_url + queryParams,
    method: 'GET'
  }, function (error, response, body) {
    result = body; // 수정
  });
  console.log(result);
  res.render('finedust_list',{'city':city,'list':result});
});

module.exports = router;