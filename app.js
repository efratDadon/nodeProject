const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./dataBase.js');
const swaggerApp = require('./swagger.js');
const port = process.env.PORT 

const business = require('./routes/businessRoutes.js');
const service = require('./routes/serviceRoutes.js');
const meeting = require('./routes/meetingRoutes.js');
const login = require('./routes/loginRoutes.js');
const user = require('./routes/userRoutes.js');
const { authenticateToken } = require('./middlewares/authMiddleware.js');

app.use(express.json());

app.use(swaggerApp);

app.use(login);
app.use(authenticateToken);
app.use(user);
app.use(service);
app.use(business);
app.use(meeting);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
