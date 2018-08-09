  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCW6s0biYO48fItNvKaAdfn0QkUjnztHFo",
    authDomain: "portfolio-94b41.firebaseapp.com",
    databaseURL: "https://portfolio-94b41.firebaseio.com",
    projectId: "portfolio-94b41",
    storageBucket: "portfolio-94b41.appspot.com",
    messagingSenderId: "974810211301"
  };

  firebase.initializeApp(config)
  var database = firebase.database();
  src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
 
passport.use(new LinkedInStrategy({
  clientID: '86m8ebytnwl0x3',
  clientSecret: 'FIqU8npvVzE6QIur',
  callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect... 
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to 
    // represent the logged-in user. In a typical application, you would want 
    // to associate the LinkedIn account with a user record in your database, 
    // and return that user instead. 
    return done(null, profile);
    console.log(this);
  });
}));
app.get('/auth/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this 
    // function will not be called. 
  });