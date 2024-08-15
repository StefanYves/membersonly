const db = require("../db/queries");

async function createMessage(req, res, next) {
  const userId = req.user.id;

  const { title, text } = req.body;

  db.addMessage(title, text, userId)
    .then((message) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error creating message:", err);
      res.status(500).send("Server error");
    });
}

async function getMessages(req, res, next) {
  const messages = await db.getMessages();

  res.render("index", { messages });
}

async function getMessagesHome(req, res, next) {
  const messages = await db.getMessages();

  res.render("home", { messages });
}

async function getMessagesDelete(req, res, next) {
  const messages = await db.getMessages();
  console.log(messages); // Log to verify data structure
  res.render("deleteMessages", { messages });
}

async function deleteMessage(req, res) {
  const messageId = parseInt(req.params.id, 10);

  if (isNaN(messageId)) {
    return res.status(400).json({ error: "Invalid message ID" });
  }

  try {
    await db.deleteMessage(messageId); // Assuming this function correctly deletes the message
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Failed to delete message" });
  }
}

module.exports = {
  createMessage,
  getMessages,
  getMessagesHome,
  deleteMessage,
  getMessagesDelete,
};
