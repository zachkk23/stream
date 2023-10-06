const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Movie', movieSchema);
