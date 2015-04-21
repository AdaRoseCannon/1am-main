'use strict';
var httpsOpts = require('/root/1am-keys/keys_config.js');
process.setuid(1006);

var express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');

var options = {
	port: 8444
};

(function () {
	var p=process.argv.indexOf('-p');
	if(!!~p && process.argv[p+1]) {
		options.port = process.argv[p+1];
	}
	options.port = parseInt(options.port);
})();

// Express Middleware
var compression = require('compression');
var mustacheEngine = require('hogan-express');
var marked = require('marked');

/**
 * Local Variables
 */

marked.setOptions({
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});

var app = express();
var templateFolder = path.normalize(path.join(__dirname, './templates'));
var staticFolder = path.normalize(path.join(__dirname, './static'));

https.createServer(httpsOpts, app).listen(options.port);
console.log('Listening for https on', options.port);

var markdown = {
	codeOfConduct: marked(fs.readFileSync(path.join(__dirname, './coc.md'), {encoding: 'utf8'})),
	readMe: marked(fs.readFileSync(path.join(__dirname, './README.md'), {encoding: 'utf8'})),
	regInstructions: marked(fs.readFileSync(path.join(__dirname, './registration_instructions.md'), {encoding: 'utf8'})),
	tips: marked(fs.readFileSync(path.join(__dirname, './tips.md'), {encoding: 'utf8'}))
};

var partials = {
	header: 'header',
	nav: 'nav',
	form: 'form'
};

app.engine('ms', mustacheEngine);
app.set('view engine', 'ms');
app.set('views', templateFolder);
app.enable('view cache');

// Use compression
app.use(compression({
  threshold: 512
}));

app.get('/', function (req, res) {
	res.render('page', {
		title: "1am Club",
		body: markdown.readMe,
		partials: partials
	});
});

app.get('/coc/', function (req, res) {
	res.render('page', {
		title: "1am Club",
		body: markdown.codeOfConduct,
		partials: partials
	});
});

app.get('/tips/', function (req, res) {
	res.render('page', {
		title: "1am Club",
		body: markdown.tips,
		partials: partials
	});
});

app.get('/reg/', function (req, res) {
	res.render('page', {
		title: "1am Club",
		body: markdown.regInstructions,
		partials: partials,
		form: true
	});
});

app.use(express.static(staticFolder));

app.get('*', function (req, res) {
	res.render('page', {
		title: "1am Club - 404!!",
		body: '<h1 class="404">404!!!</h1>',
		partials: partials
	});
});

