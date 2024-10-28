const { Schema, model } = require('mongoose');
const bookSchema = require('./bookSchema'); 

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedBooks: [bookSchema], 
  bookCount: {
    type: Number,
    default: 0,
  },
});

const User = model('User', userSchema);
module.exports = User;
