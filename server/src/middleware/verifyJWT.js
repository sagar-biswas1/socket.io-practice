const jwt = require("jsonwebtoken");
const User = require("../model/User");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send("unauthorized access"); // Unauthorized
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).send("Forbidden access"); // Forbidden
    }

    let userExist = await User.findOne({ _id: user.id });

    if (!userExist) {
      return res.status(403).send("User not found");
    }
    userExist = userExist._doc;
    delete userExist.password;
    req.user = userExist;
    next();
  });
};

module.exports = verifyJWT;
