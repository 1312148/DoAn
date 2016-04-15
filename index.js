var app = require('express')();
var http = require('http');	
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var io = require('socket.io')(http);


app.set('port', process.env.PORT || 3000);
require('./config')(app);

app.use(session({
	secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
	proxy: true,
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({ host: 'localhost', port: 27017, db: 'users-login'})
	})
);
app.use(bodyParser());
app.use(cookieParser());

require('./routes/routes.js')(app);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});