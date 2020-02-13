const Policy = require('../models/Policy');
const User = require('../models/User');

exports.addPolicy = async (req, res) => {
  
    try {
      //const user = new User(req.body);
      ///
      console.log('log req:  ' +  req.body.email);
      console.log('------>  ' + res._id);
      const policy = new Policy({
        id: req.body.id,
        amountInsured: req.body.amountInsured,
        email: req.body.email,
        inceptionDate: req.body.inceptionDate,
        installmentPayment: req.body.installmentPayment,
        clientId: req.body.clientId
     });
      ///
      await policy.save();
      //const token = await user.generateAuthToken();
      res.status(201).send({policy});
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.findPoliciesByName = async (req, res) => {
    try {
        const user = await User.findOne({name: req.query.name});
        if (!user) {
          res.status(404).send({error: 'there is no user found'})
        }
        const policies = await Policy.find({clientId: user.id});
        if (policies) {
          res.send(policies);
        } else {
          res.status(404).send({error: 'there are no policies found'})
        }
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
      }
 };

 exports.findPoliciesByIdPolicy = async (req, res) => { 
    try {
        const policyId = req.params.idPolicy;
        const policy = await Policy.findOne({id: policyId});
        if (!policy) {
        res.status(404).send({error: 'no policy found'})
        }
        const user = await User.findOne({id: policy.clientId});
        if (user) {
        res.send({user});
        } else {
        res.status(404).send({error: 'no user found'})
        }
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
};
