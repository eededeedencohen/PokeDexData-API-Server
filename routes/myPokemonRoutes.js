const express = require("express");
const router = express.Router();
const myPokemonController = require("../controllers/myPokemonController");

router.get("/id/:trainerID", myPokemonController.getAllMyPokemonByTrainerID);

module.exports = router;
