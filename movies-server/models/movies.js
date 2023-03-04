const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
})

module.exports = mongoose.model('movie', MovieSchema);
