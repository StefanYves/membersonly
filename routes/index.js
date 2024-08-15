const express = require("express");
const { Router } = require("express");
const isMember = require("./authMiddleware").isMember;

const indexRouter = express.Router();
const messageController = require("../controllers/messages");

indexRouter.get("/", isMember, messageController.getMessages);

module.exports = indexRouter;
