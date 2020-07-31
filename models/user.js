const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserModel = new Schema({
	name: {
		type: String,
	},
	lastName: {
		type: String,
	},
});

module.exports = mongoose.model('User', UserModel);
