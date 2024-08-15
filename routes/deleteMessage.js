const express = require("express");
const { Router } = express.Router();
const { isAdmin } = require("./authMiddleware");

const deleteMessage = express.Router();

const messageController = require("../controllers/messages");

deleteMessage.get("/", isAdmin, messageController.getMessagesDelete);

deleteMessage.delete("/:id", messageController.deleteMessage);

module.exports = deleteMessage;
