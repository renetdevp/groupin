var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	imgLink: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	writer: {
		type: String,
		required: true
	},
	writerImg: {
		type: String,
		required: true
	},
	writedTime: {
		type: Date,
		default: Date.now
	},
	comment: [{
		content: {
			type: String,
			required: true
		},
		writer: {
			type: String,
			required: true
		},
		writedTime:{
			type: Date,
			default: Date.now
		},
		//이미지 링크를 저장
		writerImg: {
			type: String,
			required: true
		}
	}]
});

postSchema.methods.getFormattedDate = function(date){
	return date.getFullYear() + get2digits(date.getMonth()+1) + get2digits(date.getDay()+1);
};

var Post = 	mongoose.model('post', postSchema);

module.exports = Post;
