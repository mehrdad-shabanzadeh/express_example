const express = require('express');
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/some_test', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(3000);
