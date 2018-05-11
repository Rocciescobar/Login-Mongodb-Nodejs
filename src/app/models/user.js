const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String
  },
  google: {
    email: String,
    password: String,
    id: String,
    token: String
  },
});

// Para cifrar la contraseña antes de guardarla en la base de datos
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, btoarypt.genSaltSync(8), null);
};

// Validar el password entre el login y el signup
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.export = mongoose.model('User', userSchema);