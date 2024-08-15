const express = require("express");
const { Router } = require("express");
const { isAuth } = require("./authMiddleware");

const memberRouter = express.Router();
const authController = require("../controllers/auth");

memberRouter.get("/", isAuth, authController.memberGet);

memberRouter.post("/", authController.updateMembership);

module.exports = memberRouter;
