var express = require('express');
var router = express.Router();
var request = require('request');
var parseString = require('xml2js').parseString; // xml parsing -> json
var inspect = require('util').inspect;

router.post('/city',function(req,res){ // 지역별로 도시의 미세먼지 확인
  const ServiceKey = "%2Fi9G3u9IiKGAUwHWqz%2FHganxLxlIopwPFbXkIBufTEeCEYL3MyEmUPxm9f42AkbI%2Fp6QH5hZBQC%2BJLagWGm3%2Bw%3D%3D";
  var body = req.body;
  var city = body.city;
  var request_url = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst";

  var queryParams = '?' + encodeURIComponent('ServiceKey') + `=${ServiceKey}`; /* Service Key*/
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('50'); /* 한 페이지 결과 수 */
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지 번호 */
  queryParams += '&' + encodeURIComponent('sidoName') + '=' + encodeURIComponent(city); /* 도시 이름 */
  queryParams += '&' + encodeURIComponent('searchCondition') + '=' + encodeURIComponent('HOUR');
  
  request({
    url: request_url + queryParams,
    method: 'GET'
  }, function (error, response, body) {
    parseString(body, function(err,result){ // xml parsing
      var finedust_info = result.response.body[0].items[0].item;
      var context = {};
      
      context['city'] = city;
      context['items'] = finedust_info;

      // console.log(result.response.body[0].totalCount);
      res.render('finedust_list',context);
    });
  });
});

module.exports = router;