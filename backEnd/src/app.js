const express = require("express");
const app = express();
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const errorHandler = require("./middlewares/errorHandler");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRoutes");
const swaggerDocument = require('../swagger-output.json');

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

app.use(errorHandler)

module.exports = app; 
  