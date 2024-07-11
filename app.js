const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./dataBase.js');
const swaggerApp = require('./swagger.js');
const port = process.env.PORT;

const business = require('./Rotes/businessRoutes.js');
const service = require('./Rotes/serviceRoutes.js');
const user = require('./Rotes/userRoutes.js');
const meeting = require('./Rotes/meetingRoutes.js');
const login = require('./Rotes/loginRoutes.js');
const { authenticateToken } = require('./Middlewares/authMiddleware.js');

app.use(express.json()); 

app.use(login);
app.use(authenticateToken);
app.use(service);
app.use(business);
app.use(user);
app.use(meeting);
app.use('/', swaggerApp);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
