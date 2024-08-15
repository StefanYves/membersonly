const express = require("express");
const { Router } = require("express");
const isAuth = require("./authMiddleware").isAuth;

const newMessageRouter = express.Router();
const messageController = require("../controllers/messages");

newMessageRouter.get("/", isAuth, (req, res) => {
  res.render("newMessage");
});

newMessageRouter.post("/", messageController.createMessage);

module.exports = newMessageRouter;
