const myPokemonModel = require("../models/myPokemonModel");

const getAllMyPokemonByTrainerID = (req, res) => {
  const trainerID = req.params.trainerID;
  myPokemonModel.getAllMyPokemonByTrainerID(trainerID, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

module.exports = {
  getAllMyPokemonByTrainerID,
};
