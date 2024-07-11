const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

const authenticateToken = (req, res, next) => {
  try {
    const token = req.header('auth-token');
    if (!token) {
      return res.status(401).send("Authorization failed. No access token.");
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).send("Could not verify token");
      }
      req.user = user;
      next();
    });
  } catch (err) {
    console.error("Error authenticating token:", err);
    return res.status(500).send('Internal Server Error');
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.header('auth-token');
    if (!token) {
      return res.status(401).send("Authorization failed. No access token.");
    }
    const user = jwt.verify(token, process.env.SECRET_KEY);
    console.log("User from token:", user);

    const passwordMatch = await bcrypt.compare("123456", user.password);

    if (user.name === "manager" && passwordMatch) {
      next();
    } else {
      return res.status(403).send('No access to a non-admin user');
    }
  } catch (err) {
    console.error("Error verifying admin access:", err);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = { authenticateToken, isAdmin };
