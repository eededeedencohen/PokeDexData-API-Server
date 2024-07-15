const db = require("../config/db");

const getAllItemsByTrainerID = (trainerID, callback) => {
    const query = `SELECT Item.* 
                   FROM Trainer_Items
                   JOIN Item ON Trainer_Items.item_id = Item.item_id
                   WHERE Trainer_Items.trainer_id = ?`;
    db.query(query, [trainerID], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

const getAllItems = (callback) => {
    const query = `SELECT * FROM Item`;
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

module.exports = {
    getAllItemsByTrainerID,
    getAllItems
};
