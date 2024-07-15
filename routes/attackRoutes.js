const express = require("express");
const router = express.Router();
const attackController = require("../controllers/attackController");

router.get("/all", attackController.getAllAttacks);
router.get("/type/:attackType", attackController.getAttacksByType);
router.get("/id/:attackId", attackController.getAttackById);

module.exports = router;
