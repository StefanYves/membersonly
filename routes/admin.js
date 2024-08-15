const express = require("express");
const { Router } = require("express");
const { isMember } = require("./authMiddleware");

const adminRouter = express.Router();
const authController = require("../controllers/auth");

adminRouter.get("/", isMember, authController.adminGet);

adminRouter.post("/", authController.updateAdminship);

module.exports = adminRouter;
