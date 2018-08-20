const express = require('express')
,router = express.Router()
,cookie = require('cookie');

router.get('/',function(req,res){
    var language = ""; // language 쿠키

    if (!req.headers.cookie) { // 처음 접속해서 쿠키가 없는 경우.
        res.set({'Set-Cookie':[
            `language=KR;`
        ]});
        language = "KR";
    } else {
        var headerCookie = req.headers.cookie;
        var cookies = cookie.parse(headerCookie);
        language = cookies.language;
    }

    res.render('index',{data:req.district,language:language});
})

module.exports = router;