var mongoose 	= require('mongoose');

var userSchema = new mongoose.Schema({
	Email : {type: String, unique: true},
	Password : {type: String},
	Name : {type: String},
	LastName : {type: String}

});

var User = mongoose.model('myuser', userSchema);

module.exports = User;