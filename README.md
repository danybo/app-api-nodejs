# API - insurance clients 
API app for handling clients and polcies insurances related to them..  


## Features
| Endpoint   |      Type      |      Body      |  Description |
|------------|:--------------:|:--------------:|-------------:|
| `/users/findUserByIdClient/{clientId}` |  GET | none | Get user data filtered by user id |
| `/users/findUserByName/name={nameToFind}` |    GET   | none |   Get User data filtered by user name |
| `/policies/findPoliciesByName/name={nameToFind}` | GET | none |    Get a list of policies linked to a user name |
| `/policies/findPoliciesByIdPolicy/{idPolicy}` | GET | none |    Get a user linked to a policy id |

## Requirements
* Node.js v10.16.3+
* MongoDB 3.6+
By the way this app was built with:
* Node.js v12.15.0
* MongoDB 4.2.3
* npm 6.13.4

## Setup & run
Download the sources.

### Datasource configuration
The application is using a cloud instance of mongodb for data storage.  
Update the password field in `src/config/config.json`:
``` json
"mongodb_url": "mongodb+srv://danybodatabaseUser:<password>@cluster0-quo37.mongodb.net/insurancesPoliciesDB?retryWrites=true&w=majority",
```

### Setup npm
``` shell script
npm install
```

### Start the application
``` shell script
npm run start
```

### Go on the swagger page
**Swagger** is deployed with the app, so you can see and test the API without a third party tool.  
You just need to go: `http://<your host>/api-docs`

### A case used  as an example in DB
Here two set of data you can start with:  
**Name: johndoe**  
Role: user  
Id: clientId  

## TO DO list left
Look issues [here](https://github.com/danybo/app-api-nodejs/issues).
* Add unit tests
* Rename path to be more generic
* Handle authentication token 
* Improve middlewar for handling request with roles
* Use prettier and eslint for purpose quality
* Refactor code in order to reduce the code in Controllers
