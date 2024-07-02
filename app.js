const express = require('express');
const app = express();
require('dotenv').config();
const connectDB= require ('./dataBase.js');
const port = process.env.PORT;


const business = require('./Rotes/businessRoutes.js')

app.use(business)
app.use(express.json());




connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
