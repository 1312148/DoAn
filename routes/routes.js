module.exports = function(app){

	var User = require('../models/users');
	var AM = require('../models/accounts');

	app.get('/', function(req, res){
	
			res.render('login');
		
	});

	app.get('/signup', function(req,res){		
		res.render('signup');
	});

	// main login page //	
	var email;

	app.post('/', function(req, res){
		AM.manualLogin(req.body['Email'], req.body['Password'], function(e, o){
			if (!o){
				res.status(400).send(e);
			}	
			else{	
					email=req.body['Email'];					
					res.redirect('/home');
				}
				
								
		});
	});


	
	app.post('/signup', function(req, res){
		AM.addNewAccount({
			firstname 	: req.body['Name'],			
			lastname 	: req.body['LastName'],
			user 	: req.body['Email'],
			pass	: req.body['Password'],

		}, function(e){
			if (e){
				res.status(400).send(e);
			}	else{				
				res.redirect('/');
			}
		});
	});

	

	app.get('/home', function(req, res) {
		
			AM.getAllRecords(email, function(e,o){
					res.render('home', { accts: o});
		})
	});
	
	app.get('/reset', function(req, res) {
		AM.delAllRecords(function(){
			res.status(200).send('Delete all accounts');
		});
	});



/*
	app.post("/login", function(req,res){
		var Email = req.body.Email;
		var Password = req.body.Password;
		User.findOne({Email:Email, Password:Password}, function(req,res){
			if(err){
				console.log(err);
				return res.status(500).send();
			}
			if(!User)
				return res.status(404).send();
			return res.status(200).send();
		});
	});

	app.post("/signup", function(req,res){

		var Email = req.body.Email;
		var Password = req.body.Password;
		var Name = req.body.Name;
		var LastName = req.body.LastName;

		var newuser = new User();
		newuser.Email = Email;
		newuser.Password = Password;	
		newuser.Name = Name;
		newuser.LastName = LastName;

		newuser.save(function(err, savedUser){
			if(err){
				console.log(err);
				return res.status(500).send();
			}

		console.log(Email);

			return res.status(200).send();
		});
	});*/
}