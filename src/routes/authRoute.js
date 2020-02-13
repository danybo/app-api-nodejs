/**Globals**/
const express = require("express");

/**Models**/
const User = require("../models/User");

/**Controllers**/
const authController = require("../controllers/authController");

const router = express.Router();

// endpoint for having a token
router.post("/addUser", authController.generateToken);

module.exports = router;
