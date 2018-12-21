var express = require('express');
var router = express.Router();

module.exports = function(app, db) {
	
	

	router.get('/', function(req, res) {
		res.render('index2');
	});

	router.get('/index2', function(req, res) {
		res.render('index2');
	});

	router.get('/contacts', function(req, res) {
		res.render('contacts');
	});

	router.get('/friends', function(req, res) {
		res.render('friends');
	});

	router.get('/news', function(req, res) {
		res.render('news');
	});

	router.get('/single', function(req, res) {
		res.render('single-building');
	});

	router.get('/single-news', function(req, res) {
		res.render('single-news');
	});

	router.get('/about', function(req, res) {
		res.render('about');
	});

	router.get('/item2', function(req, res) {
		res.render('item');
	});

	router.get('/item1', function(req, res) {
		res.render('item1');
	});

	router.get('/test', function(req, res) {
		res.render('test');
	});


	app.use('/', router);
};
