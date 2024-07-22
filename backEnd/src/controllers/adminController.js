const jwt = require("jsonwebtoken");



const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_EMAIL || "admin" &&
      password === process.env.ADMIN_PASSWORD || "admin123"
    ) {
        console.log(username);
      const token = jwt.sign(
        { username, isAdmin: true },
        process.env.SECRET_STR,
        {
          expiresIn: process.env.LOGIN_EXPIRES,
        }
      );
  
      res.status(200).json({
        status: "sucess",
        message: "sucessfully admin login",
        token,
      });
    } else {
      res.status(401).json({
        status: "not found",
        message: "invalid admin",
      });
    }
  };

  module.exports = {adminLogin}