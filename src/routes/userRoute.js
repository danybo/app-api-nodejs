/**Globals**/
const express = require("express");

/**Models**/
const User = require("../models/User");

/**Controllers**/
const userController = require("../controllers/userController");

const router = express.Router();

// endpoint for adding client user to db
router.post('/addUser', userController.addUser);

/**
 * @swagger
 *
 * /users/findUserByName:
 *   get:
 *     description: Get User data filtered by user name.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: The name of the user.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User data as json.
 *       404:
 *         description: client not found
 */
router.get('/findUserByName', userController.findUserByName);

/**
 * @swagger
 *
 * /users/findUserByIdClient/{idClient}:
 *   get:
 *     description: Get user data filtered by Client id.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: IdClient of the user.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User data as json
 *       404:
 *         description: client not found
 */
router.get('/findUserByIdClient/:idClient', userController.findUserByIdClient);

module.exports = router;
