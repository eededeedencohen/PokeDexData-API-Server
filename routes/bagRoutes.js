const express = require("express");
const router = express.Router();
const bagController = require("../controllers/bagController");

router.get("/trainer/:trainerID", bagController.getAllItemsByTrainerID);
router.get("/all", bagController.getAllItems);

module.exports = router;
