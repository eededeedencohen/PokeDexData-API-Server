const seenPokemonModel = require("../models/seenPokemonModel");

const getAllSeenPokemonByID = (req, res) => {
    const trainerID = req.params.trainerID;
    seenPokemonModel.getAllSeenPokemonByID(trainerID, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Directly return the results as an array of objects with {pokemon_number, pokemon_name}
        res.status(200).json(results);
    });
};

const getAllSeenPokemonByName = (req, res) => {
    const trainerName = req.params.trainerName;
    seenPokemonModel.getAllSeenPokemonByName(trainerName, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Directly return the results as an array of objects with {pokemon_number, pokemon_name}
        res.status(200).json(results);
    });
};

const addSeenPokemon = (req, res) => {
    const seenPokemon = {
        trainer_id: req.body.trainer_id,
        pokemon_name: req.body.pokemon_name
    };
    seenPokemonModel.addSeenPokemon(seenPokemon, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json(results);
    });
};

module.exports = {
    getAllSeenPokemonByID,
    getAllSeenPokemonByName,
    addSeenPokemon
};
