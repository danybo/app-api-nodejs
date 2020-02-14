const User = require('../models/User');

// Create a new user in db
exports.addUser = async (req, res) => {
  
  try {
    //const user = new User(req.body);
    ///
    console.log('log req:  ' +  req.body.name);
    console.log('------>  ' + res._id);
    const user = new User({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      role: req.body.role
   });
    ///
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.findUserByName = async (req, res) => {
    try {
      console.log(req.query.name);
      let user;
        user = await User.findOne({name: req.query.name});
      if (user) {
        res.send(user);
      } else {
        res.status(404).send(
            {error: 'Client not found'})
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error)
    }
};

exports.findUserByIdClient = async (req, res) => {
  try {
    const userId = req.params.idClient;
    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).send({ error: "Client not found" });
    }
    res.send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
};
