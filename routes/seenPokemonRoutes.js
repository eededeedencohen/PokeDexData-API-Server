const express = require("express");
const router = express.Router();
const seenPokemonController = require("../controllers/seenPokemonController");

// Route to get all seen Pokemon by trainer ID
router.get("/id/:trainerID", seenPokemonController.getAllSeenPokemonByID);

// Route to get all seen Pokemon by trainer name
router.get("/name/:trainerName", seenPokemonController.getAllSeenPokemonByName);

// Route to add a seen Pokemon
router.post("/", seenPokemonController.addSeenPokemon);

module.exports = router;
