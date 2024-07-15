const pokedexModel = require("../models/pokedexModel");

const getAllPokemon = (req, res) => {
    pokedexModel.getAllPokemon((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

const getPokemonEvolutions = (req, res) => {
    const pokemonName = req.params.pokemonName;
    pokedexModel.getPokemonEvolutions(pokemonName, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

const getPokemonAttacks = (req, res) => {
    const pokemonName = req.params.pokemonName;
    pokedexModel.getPokemonAttacks(pokemonName, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

module.exports = {
    getAllPokemon,
    getPokemonEvolutions,
    getPokemonAttacks
};
