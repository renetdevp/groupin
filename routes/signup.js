var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usr = require('../models/userModel');

router.get('/club', function(req, res){
	res.render('users/signupclub');
});

router.post('/club', function(req, res){
	var usrId = req.body.id;
	var usrPw = req.body.pw;
	var cmuNm = req.body.comu_name;
	console.log(usrId);
	console.log(usrPw);
	console.log(cmuNm);

	Usr.create({
		id: usrId,
		pw: usrPw,
		nickname: "",
		profileImg: null
	});

	res.redirect('/signup/club');
});

module.exports = router;
