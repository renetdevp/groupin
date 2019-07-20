var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usr = require('../models/userModel');
var async = require('async');

router.get('/new', function(req, res){
	res.render('users/new', {
		formData: req.flash('formData')[0],
		idError: req.flash('idError')[0],
		nicknameError: req.flash('nicknameError')[0],
		passwordError: req.flash('passwordError')[0]
	});
});

router.post('/', checkUsr, function(req, res, next){
	Usr.create(req.body.user, function(err, usr){
		if(err)
			return res.json({
				success: false,
				message: err
			});
		res.redirect('/login');
	});
});

function isLogin(res, req, next){
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect('/');
}

function checkUsr(res, req, next){
	var isValid = true;
	async.waterfall(
		[function(callback){
			Usr.findOne({
				id: req.body.user.id,
				_id: {
					$ne: mongoose.Types.ObjectId(req.params.id)
				}
			},
		function(err, usr){
			if (usr){
				isValid = false;
				req.flash("idError", "ID already resistered");
			}
			callback(null, isValid);
		});
	},
function(isValid, callback){
	Usr.findOne({
		nickname: req.body.usr.nickname,
		_id: {
			$ne: mongoose.Types.ObjectId(req.params.id)
		}
	},
function(err, usr){
	if (usr){
		isValid = false;
		req.flash("nicknameError", "Nickname already resistered");
	}
	callback(null, isValid);
});
}], function(err, isValid){
	if(err)
		return res.json({
			success: "false",
			message: err
		});
	if(isValid){
		return next();
	}
	else{
		req.flash("formData", req.body.usr);
		res.redirect("back");
	}
});
}
