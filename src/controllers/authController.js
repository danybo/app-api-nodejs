const User = require('../models/User');

/*
exports.generateToken = async (req, res) => {
  // TODO sanitize request inputs
  if (!req.body.userId || !req.body.password) {
    res.status(400).json({message: "bad request, missing parameter"});
  }

  const user = await User.findOne({id: req.body.userId});
  if (user) {
    const payload = {id: user.id};
    const token = jwt.sign(payload, global.gConfig.jwt_secret_key);
// TODO database call to store the token
    res.json({message: "ok", token: token});
  } else {
    res.status(401).json({message: "no such user found"});
  }
};
*/

exports.generateToken = async (req, res) => {
  // Create a new user
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
