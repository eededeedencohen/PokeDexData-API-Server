const db = require("../config/db");

const getAllSeenPokemonByID = (trainerID, callback) => {
  const query = `SELECT Pokemon.pokemon_number, Pokemon.pokemon_name
                   FROM Trainer_Seen_Pokemon
                   JOIN Pokemon ON Trainer_Seen_Pokemon.pokemon_name = Pokemon.pokemon_name
                   WHERE Trainer_Seen_Pokemon.trainer_id = ?
                   ORDER BY Pokemon.pokemon_number ASC
                   `;
  db.query(query, [trainerID], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const getAllSeenPokemonByName = (trainerName, callback) => {
  const query = `SELECT Pokemon.pokemon_number, Pokemon.pokemon_name
                   FROM Trainer_Seen_Pokemon
                   JOIN Trainer ON Trainer_Seen_Pokemon.trainer_id = Trainer.trainer_id
                   JOIN Pokemon ON Trainer_Seen_Pokemon.pokemon_name = Pokemon.pokemon_name
                   WHERE Trainer.trainer_name = ?`;
  db.query(query, [trainerName], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

const addSeenPokemon = (seenPokemon, callback) => {
  const query =
    "INSERT INTO Trainer_Seen_Pokemon (trainer_id, pokemon_name) VALUES (?, ?)";
  db.query(
    query,
    [seenPokemon.trainer_id, seenPokemon.pokemon_name],
    (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

module.exports = {
  getAllSeenPokemonByID,
  getAllSeenPokemonByName,
  addSeenPokemon,
};
