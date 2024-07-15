const db = require("../config/db");

const getAllMyPokemonByTrainerID = (trainerID, callback) => {
    const query = `SELECT Caught_Pokemon.*, Trainer_Pokemon.pokemon_location
                   FROM Caught_Pokemon
                   JOIN Trainer_Pokemon ON Caught_Pokemon.pokemon_id = Trainer_Pokemon.pokemon_id
                   WHERE Trainer_Pokemon.trainer_id = ?`;
    db.query(query, [trainerID], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllMyPokemonByTrainerID
};
