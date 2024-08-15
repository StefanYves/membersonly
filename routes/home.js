const express = require("express");
const { Router } = require("express");

const homeRouter = express.Router();
const messageController = require("../controllers/messages");

homeRouter.get("/", messageController.getMessagesHome);

module.exports = homeRouter;
