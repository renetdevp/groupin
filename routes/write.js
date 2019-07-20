var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var fs = require('fs');

router.get('/', function(req, res){
	res.render('write');
});
router.post('/', function(req, res){
	console.log(req.body);
	//글 제목
	var Title = req.body.postTitle;
	//글 내용
	var Content = req.body.postContent;
	//이미지
	var uploadFile = req.files.postImageInput;
	//이미지 저장
	var newName = 'IMG/' + uploadFile.name;
	fs.rename(uploadFile.path, newName, function(err){
		if (err){
			throw err;
		}
	});
	res.redirect('/write');
});

module.exports = router;
