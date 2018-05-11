const LocalStrategy = require('passport-local').Strategy;

const User = require('../app/models/user');

module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (user, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // Signup
  passport.use('local-signup', new LocalStrategy ({
    usernameField: 'email',
    passportField: 'password',
    passReqToCallback: true
  },
  function (req, email, password, done) {
    User.findOne({'local.email': email}, function(err, user) {
      if (err) { return done(err); }
      if (user) {
        return done(null, false, req.flash('signupMessage', 'El email ya existe'));
      } else {
        var newUser = new User();
        newUser.local.email = email;
        newUser.local.password = password;
      }
    });
  }));
};