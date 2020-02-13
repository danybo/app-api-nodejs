/**Globals**/
const express = require("express");

/**Controllers**/
const policyController = require("../controllers/policyController");

const router = express.Router();

// endpoint for adding policy to db
router.post('/addPolicy', policyController.addPolicy);
//
router.get('/findPoliciesByName', policyController.findPoliciesByName);
router.get('/findPoliciesByIdPolicy/:idPolicy', policyController.findPoliciesByIdPolicy);

module.exports = router;