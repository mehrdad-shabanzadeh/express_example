const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/save', (req, res) => {
	const newUser = new User({
		name: req.body.name,
		lastName: req.body.lastName,
	});

	newUser.save((err, user) => {
		if (err) {
			res.send(err);
		} else {
			res.json({
				msg: 'New user created.',
				user: user,
			});
		}
	});
});

module.exports = router;
