var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('signup'); 

}
exports.signupERROR = function(req,res){

	res.render('signupERROR'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}
exports.signinERROR = function(req,res){

	res.render('signinERROR'); 

}

exports.dashboard = function(req,res){
  res.send('<script>window.location.href="https://afternoon-tundra-66682.herokuapp.com/";</script>');
	//res.render('dashboard'); 
  //window.location.replace("https://desolate-springs-87096.herokuapp.com/");
}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  //res.redirect('/');
  res.render('signout'); 
  });

}