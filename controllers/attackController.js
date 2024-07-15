const attackModel = require("../models/attackModel");

const getAllAttacks = (req, res) => {
    attackModel.getAllAttacks((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

const getAttacksByType = (req, res) => {
    const attackType = req.params.attackType;
    attackModel.getAttacksByType(attackType, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // res.status(200).json(results);
        // return the number of results, attack type, and the results
        res.status(200).json({
            count: results.length,
            type: attackType,
            results: results
        });
    });
};

const getAttackById = (req, res) => {
    const attackId = req.params.attackId;
    attackModel.getAttackById(attackId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

module.exports = {
    getAllAttacks,
    getAttacksByType,
    getAttackById
};
