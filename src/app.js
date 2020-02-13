const express = require('express');
const port = process.env.PORT;

/**
 * Database
 */
require('./database/db');
 /**
  * Route
 */
const authRoute = require('./routes/authRoute');  
const userRoute = require('./routes/userRoute');
const policyRoute = require('./routes/policyRoute');
const app = express();

app.use(express.json());
//app.use(express.urlencoded());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/policies', policyRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

module.exports = app;

/* const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
 
const PORT = process.env.PORT || 5000
const app = express()

app.set("json spaces", 2)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
app.get("/", (req, res) => {
  res.send("Welcome to your App!")
})

app.get("/getData", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        res.json(response.data)
      }).catch(function(error) {
        res.json("Error occured!")
      })
  })

  app.post("/getUserById", (req, res) => {
    if (!req.body.id) {
      res.json("No ID found in reqest body.")
    } else {
      axios.get(`https://jsonplaceholder.typicode.com/users/${req.body.id}`)
        .then(function(response) {
          res.json(response.data)
        }).catch(function(error) {
          res.json("Error occured!")
        })
    }
  })
 
app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})*/
