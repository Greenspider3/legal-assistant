const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const EmployeeModel = require('./models/Employee');

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    EmployeeModel.findOne({ email: email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'No record exists with that email.' });
        }

        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      })
      .catch(err => done(err));
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  EmployeeModel.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
