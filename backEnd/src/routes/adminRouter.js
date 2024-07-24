const express = require("express");
const adminController = require("../controllers/adminController");

const adminRouter = express.Router().post("/login", adminController.adminLogin);

module.exports = adminRouter;
