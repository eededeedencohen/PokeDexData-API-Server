const db = require("../config/db");

const getAllAttacks = (callback) => {
    const query = `SELECT * FROM Attack`;
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getAttacksByType = (attackType, callback) => {
    const query = `SELECT * FROM Attack WHERE attack_type = ?`;
    db.query(query, [attackType], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getAttackById = (attackId, callback) => {
    const query = `SELECT * FROM Attack WHERE attack_id = ?`;
    db.query(query, [attackId], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllAttacks,
    getAttacksByType,
    getAttackById
};
