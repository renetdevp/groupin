var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('../config/passport.js');

router.get('/', function(req, res){
	res.render('index');
});

router.get('/login', function(req, res){
	res.render('login', {
		id: req.flash("id")[0],
		loginError: req.flash()
	});
});

router.post('/login', function(req, res, next){
	req.flash("id");
	if (req.body.id.length === 0 || req.body.pw.length === 0){
		req.flash("id", req.body.id);
		req.flash("loginError", "Input your Id or Pw");
		res.redirect('/login');
	}
	else {
		next();
	}
}, passport.authenticate('local-login', {
	successRedirect: '/',
	failureRedirect: '/login',
	fualureFlash: true
})
);
router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

module.exports = router;
