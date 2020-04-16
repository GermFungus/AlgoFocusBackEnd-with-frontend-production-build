var router = require('express').Router();
var DB = require("../data-base/DataBase");
var Mailer = require('../Mailer/Mailer');
router.post('/register' ,async (req , res , next ) => {
    console.log(req.body);
    let verify = false;
    if(req.body.params.user.phone){
        let phone = req.body.params.user.phone;
        if(phone.length === 10){
            verify = true;
            for(i = 0 ; i < 10 ; ++i){
                if(isNaN(phone[i])){
                    verify = false;
                }
            }
        }
    }
    if(verify === true){
        let resp = await DB.dbWrite(req.body.params.user);
        let mailResp = await Mailer.sendMail(req.body.params.user);
        if(mailResp){
            res.send(["sucess"]);
        }
    }
    else{
        res.send(["Incomplete"]);
    }
});

module.exports = router;