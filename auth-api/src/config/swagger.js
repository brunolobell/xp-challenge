const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/config/swagger/swagger_output.json';
const endpointsFiles = ['./src/server.js'];

swaggerAutogen(outputFile, endpointsFiles);