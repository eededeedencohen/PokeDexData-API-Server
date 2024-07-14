const Pokemon = require('../models/pokemonModel');

const getAllPokemon = (req, res) => {
  Pokemon.getAllPokemon((err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving data from the database.');
    }
    res.json(results);
  });
};

const addPokemon = (req, res) => {
  const newPokemon = {
    name: req.body.name,
    type: req.body.type
  };

  Pokemon.addPokemon(newPokemon, (err, results) => {
    if (err) {
      return res.status(500).send('Error inserting data into the database.');
    }
    res.status(201).send('Data inserted successfully.');
  });
};

module.exports = {
  getAllPokemon,
  addPokemon
};
