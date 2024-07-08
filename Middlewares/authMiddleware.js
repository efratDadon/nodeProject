const jwt = require('jsonwebtoken');
require('dotenv').config();


  const authenticateToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
      return res.status(401).send("Authorization failed. No access token.");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).send("Could not verify token");
      }
      req.user = user;
    });
    next();
  };

  module.exports = {authenticateToken}
    
  