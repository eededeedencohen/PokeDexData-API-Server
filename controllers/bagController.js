const bagModel = require("../models/bagModel");

const getAllItemsByTrainerID = (req, res) => {
    const trainerID = req.params.trainerID;
    bagModel.getAllItemsByTrainerID(trainerID, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

const getAllItems = (req, res) => {
    bagModel.getAllItems((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

module.exports = {
    getAllItemsByTrainerID,
    getAllItems
};
