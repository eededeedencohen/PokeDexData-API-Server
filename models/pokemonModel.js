const db = require("../config/db");

const getAllPokemon = (callback) => {
  const query = "SELECT * FROM pokemon order by pokemon_number";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const addPokemon = (pokemon, callback) => {
  const query = "INSERT INTO pokemon (name, type) VALUES (?, ?)";
  db.query(query, [pokemon.name, pokemon.type], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = {
  getAllPokemon,
  addPokemon,
};
