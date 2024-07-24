const jwt = require("jsonwebtoken");
const createError = require("../utils/createError");

const adminLogin = async (req, res, next) => {
  const { username, password } = req.body;
  if (
    username !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    next(createError("not correct", "ValidationError"));
    console.log(username);
  } else {
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
  }
};

module.exports = { adminLogin };
