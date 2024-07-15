const express = require("express");
const router = express.Router();
const pokedexController = require("../controllers/pokedexController");

router.get("/all", pokedexController.getAllPokemon);
router.get("/evolutions/:pokemonName", pokedexController.getPokemonEvolutions);
router.get("/attacks/:pokemonName", pokedexController.getPokemonAttacks);

module.exports = router;
