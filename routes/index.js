const express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index',{_title:'Jade'});
})

module.exports = router;