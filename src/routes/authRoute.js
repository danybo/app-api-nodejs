/**Globals**/
const express = require("express");

/**Models**/
const User = require("../models/User");

/**Controllers**/
const authController = require("../controllers/authController");

const router = express.Router();

// endpoint for manually adding client for test purpose
/**
 * @swagger
 * 
 * /auth/token:
 *   post:
 *     description: Authenticate to get a token.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: token for logging.
 *       500:
 *         description: Something went wrong.
 */
router.post("/token", authController.generateToken);

module.exports = router;
