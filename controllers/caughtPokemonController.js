const caughtPokemonModel = require("../models/caughtPokemonModel");

const getCaughtPokemonByID = (req, res) => {
    const pokemonID = req.params.pokemonID;
    caughtPokemonModel.getCaughtPokemonByID(pokemonID, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

module.exports = {
    getCaughtPokemonByID
};
