const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  role: String,
  username: String,
  password: String,
  points: Number
  
})

const User = mongoose.model('User', userSchema);
module.exports = User;
