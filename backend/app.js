const express = require('express');

const morgan = require('morgan');

const rateLimit = require('express-rate-limit');


const AppError = require('./utils/appError');


const expSubRoutes = require('./routes/expSubRoutes');


const app = express();

let cors = require('cors')


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//es para poder probar el front
app.use(cors())
//limiter requues flom same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in a hour!',
});

app.use('/api', limiter);
//esto es para que se pueda usar req.body es un middleware con limite de peso
app.use(express.json({ limit: '10kb' }));



app.use('/api/v1/expSubRoutes', expSubRoutes);


//creamos un middleware para cuando se coloca una url erronea
app.use('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});


module.exports = app;
