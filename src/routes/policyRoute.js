/**Globals**/
const express = require("express");

/**Controllers**/
const policyController = require("../controllers/policyController");

const router = express.Router();

// endpoint for adding policy to db
router.post('/addPolicy', policyController.addPolicy);
//
/**
 * @swagger
 *
 * /policies/findPoliciesByName:
 *   get:
 *     description: Get a list of policies linked to a user name.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userName
 *         description: The name of the user linked to polices.
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: List of policies as json.
 *       404:
 *         description: No policy found.
 */
router.get('/findPoliciesByName', policyController.findPoliciesByName);

/**
 * @swagger
 *
 * /policies/findPoliciesByIdPolicy/{idPolicy}:
 *   get:
 *     description: Get a user linked to a policy id.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: A policy id.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A user id.
 *       404:
 *         description: No policy found.
 */
router.get('/findPoliciesByIdPolicy/:idPolicy', policyController.findPoliciesByIdPolicy);

module.exports = router;