const express = require('express');
const router = express.Router();

const Pokemon = require('../models/pokemon');

router.route('/')
  .get((req, res) => {
    Pokemon.find({})
      .then(pokemon => res.send(pokemon))
      .catch(res.error)
  })
  .post((req, res) => {
    Pokemon.create(req.body)
      .then(pokemon => res.send(pokemon))
      .catch(res.error)
  })

router.route('/:id')
  .get((req, res) => {
    Pokemon.findOne(req.params.id)
      .then(pokemon => res.send(pokemon))
      .catch(res.error)
  })
  .delete((req, res) => {
    Pokemon.findByIdAndRemove(req.params.id)
      .then(pokemon => res.send())
      .catch(res.error)
  })
  .put((req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(pokemon => res.send(pokemon))
      .catch(res.error)
  })

// router.get('/', (req, res) => {
//   Pokemon.find({}, res.handle) //res.handle is middleware to handle response
// })

// IF YOU WANT TO FUX WIT IT
// router.get('/', (req, res) => {
//   Pokemon.findOne({...}, (err, pokemon) => {
//     pokemon.types.push('rock');
//     pokemon.save(res.handle);
//   })
// })

module.exports = router;
