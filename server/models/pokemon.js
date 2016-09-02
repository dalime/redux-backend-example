const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  image: { type: String },
  types: [ { type: String } ]
});

const Pokemon = mongoose.model('Pokmeon', pokemonSchema);

module.exports = Pokemon;
