const db = require("../config/db");

const getAllPokemon = (callback) => {
    const query = `SELECT * FROM Pokemon`;
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getPokemonEvolutions = (pokemonName, callback) => {
    const query = `
        WITH RECURSIVE EvolutionTree AS (
            SELECT 
                p.pokemon_number,
                p.pokemon_name, 
                pe.evolution_name, 
                pe.evolution_method,
                pe.evolution_level,
                pe.evolution_item
            FROM Pokemon p
            JOIN Pokemon_Evolution pe ON p.pokemon_name = pe.pokemon_name
            WHERE p.pokemon_name = ?
            UNION
            SELECT 
                p.pokemon_number,
                p.pokemon_name, 
                pe.evolution_name, 
                pe.evolution_method,
                pe.evolution_level,
                pe.evolution_item
            FROM Pokemon p
            JOIN Pokemon_Evolution pe ON p.pokemon_name = pe.pokemon_name
            INNER JOIN EvolutionTree et ON p.pokemon_name = et.evolution_name
        )
        SELECT 
            et.pokemon_number,
            et.pokemon_name, 
            et.evolution_name, 
            et.evolution_method,
            et.evolution_level,
            et.evolution_item
        FROM EvolutionTree et
        ORDER BY et.pokemon_number;
    `;
    db.query(query, [pokemonName], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getPokemonAttacks = (pokemonName, callback) => {
    const query = `SELECT Attack.* 
                   FROM Pokemon_Attack
                   JOIN Attack ON Pokemon_Attack.attack_id = Attack.attack_id
                   WHERE Pokemon_Attack.pokemon_name = ?`;
    db.query(query, [pokemonName], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllPokemon,
    getPokemonEvolutions,
    getPokemonAttacks
};
