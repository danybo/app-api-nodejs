// require('../database/db');
require('../database/db');
const fetch = require("node-fetch");
const User = require('../models/User');
const config = require('../config/config.js');

fetch('http://www.mocky.io/v2/5808862710000087232b75ac/', {
    method: 'get',
})
.then(function(response){
    return response.json();
})
.then(function(json){
    console.log(json);
    loadUsers(json);
})
.catch((err) => {
    console.error( 'Failed to load Clients to db'+ err);
    process.exit(1);
})

function loadUsers(listUsers){
    try{
        console.log(listUsers.clients);
        listUsers.clients.forEach(client => {
            console.log('client '+ client);
            const user = new User({
                id: client.id,
                name: client.name,
                email: client.email,
                role: client.role
            });
            user.save().then(console.log('insert user: ' + user));
        });
    } catch (err){
        console.error(err);
        process.exit(1);
    }
}