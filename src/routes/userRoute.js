/**Globals**/
const express = require("express");

/**Models**/
const User = require("../models/User");

/**Controllers**/
const userController = require("../controllers/userController");

const router = express.Router();

// endpoint for adding client user to db
router.post('/addUser', userController.addUser);
router.get('/findUserByName', userController.findUserByName);
router.get('/findUserByIdClient/:idClient', userController.findUserByIdClient);

module.exports = router;
