const db = require("../config/db");

const getCaughtPokemonByID = (pokemonID, callback) => {
    const query = `
        SELECT 
            Caught_Pokemon.*, 
            a1.attack_name AS attack1_name, 
            a2.attack_name AS attack2_name, 
            a3.attack_name AS attack3_name, 
            a4.attack_name AS attack4_name,
            i.item_name AS item_name
        FROM 
            Caught_Pokemon
        LEFT JOIN Attack a1 ON Caught_Pokemon.pokemon_attack1 = a1.attack_id
        LEFT JOIN Attack a2 ON Caught_Pokemon.pokemon_attack2 = a2.attack_id
        LEFT JOIN Attack a3 ON Caught_Pokemon.pokemon_attack3 = a3.attack_id
        LEFT JOIN Attack a4 ON Caught_Pokemon.pokemon_attack4 = a4.attack_id
        LEFT JOIN Item i ON Caught_Pokemon.item_id = i.item_id
        WHERE 
            Caught_Pokemon.pokemon_id = ?
    `;
    db.query(query, [pokemonID], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getCaughtPokemonByID
};
