require('../database/db');
const fetch = require("node-fetch");
const Policy = require('../models/Policy');
const config = require('../config/config.js');

fetch('http://www.mocky.io/v2/580891a4100000e8242b75c5', {
  method: 'get',
})
.then(function (response) {
  return response.json();
})
.then(function (json) {
    console.log(json);
    loadPolicies(json);
})
.catch((err) => {
  console.error('Failed to fetch policies informations from url sources');
  console.error(err);
  process.exit(1);
});

function loadPolicies(listPolicies) {
  try {
    console.log(listPolicies.policies);
    listPolicies.policies.forEach( policyItem => {
        console.log('policy ' + policyItem);
        const policy = new Policy({
            id: policyItem.id,
            amountInsured: policyItem.amountInsured,
            email: policyItem.email,
            inceptionDate: policyItem.inceptionDate,
            installmentPayment: policyItem.installmentPayment,
            clientId: policyItem.clientId
        });
        policy.save().then(console.log("insert policy: " + policy))
    });
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
}
