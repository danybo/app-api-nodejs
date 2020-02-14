const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    info: {
      title: 'API - Clients & Policies Insurance', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'API app for handling clients and polcies insurances related to them.',
    }
  },
  // Path to the API docs
  apis: ['./src/routes/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;