const dotenv = require('dotenv');
//configuro variables de entorno
dotenv.config({ path: './config.env' });

// Aquí haríamos la conexión a la base de datos 

process.on('uncaughtException', (err) => {
  console.log(`Error name: ${err.name}`, `.Error message: ${err.message}`);
  console.log('UNCAUGHT REJECTION');
  process.exit(1);
});
//configuraciones de variables glbales(dotenv.config) antes para poder acceder a las variables
const app = require('./app');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App runin on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(`Error name: ${err.name}`, `.Error message: ${err.message}`);
  console.log('UNHANDLED REJECTION');
  server.close(() => {
    process.exit(1);
  });
});
