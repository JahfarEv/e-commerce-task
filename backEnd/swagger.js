import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
      title: 'E-commerce',
      description: 'E-commerce Api'
    },
    host: 'localhost:4002',
    schemes: ['http']
  };
  
  const outputFile = './swagger-output.json';
  const endpointsFiles = ['./src/routes/*.js', './src/app.js'];
  
  swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger documentation generated successfully.');
    require('./src/app');
  });