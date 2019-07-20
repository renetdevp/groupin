var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	pw: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true,
		unique: true
	},
	//이미지 링크를 저장
	profileImg: {
		type: String,
		required: true
	},
	profile: {
		type: String,
		required: true
	},
	liked: [{
		title: {
			type: String,
			required: true
		},
		writer: {
			type: String,
			required: true
		}
	}],
	writed: [{
		title: {
			type: String,
			required: true
		},
		writer: {
			type: String,
			required: true
		}
	}]
});
userSchema.pre("save", function(next){
	var usr = this;
	if (!usr.isModified("password")){
		return next();
	}
	else {
		usr.password = bcrypt.hashSync(usr.password);
		return next();
	}
});
userSchema.methods.authenticate = function(password){
	var usr = this;
	return bcrypt.compareSync(password, usr.password);
};
userSchema.methods.getFormattedDate = function(date){
	return date.getFullYear() + get2digits(date.getMonth()+1) + get2digits(date.getDay()+1);
};

var Usr = mongoose.model('usr', userSchema);

module.exports = Usr;
