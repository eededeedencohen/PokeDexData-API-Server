const express = require("express");
const router = express.Router();
const caughtPokemonController = require("../controllers/caughtPokemonController");

router.get("/id/:pokemonID", caughtPokemonController.getCaughtPokemonByID);

module.exports = router;
