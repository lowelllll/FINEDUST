const express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index',{data:req.district});
})

module.exports = router;