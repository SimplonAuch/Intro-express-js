

//-- Webserver

var express = require('express');
var app = express();
app.listen(3000);



//-- Body parser

var bp = require('body-parser');
app.use(bp.urlencoded({ extended: false }))



//-- DB

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("koko", salt);

var obj = {
	"login": "orel",
	"pass": hash
};




//-- Pages

function authentificationAjax( req, resp ){
	var loginOk = ( req.body.login == obj.login );
	var passOk = ( bcrypt.hashSync(req.body.pass, salt) == obj.pass );

	resp.send( loginOk && passOk ? 'ok' : 'ko' );
}


//-- Routes

app.use(express.static('public'));

app.get('/', function( req, resp ){
	resp.sendfile('./html/index.html');
});

app.get('/account', function( req, resp ){
	resp.sendfile('./html/account.html');
});

app.post('/auth', authentificationAjax);

