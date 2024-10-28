const { Schema } = require('mongoose');

const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  
  bookId: {
    type: String,
    required: true,
    unique: true, 
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

bookSchema.index({ bookId: 1 });

module.exports = bookSchema;
