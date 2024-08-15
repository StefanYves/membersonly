const bcrypt = require("bcryptjs");
const db = require("../db/queries");

async function createUser(req, res) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  await db.addUser(
    req.body.firstname,
    req.body.lastname,
    req.body.username,
    hashedPassword
  );

  res.redirect("/log-in");
}

async function memberGet(req, res) {
  const userId = req.user.id;
  const user = await db.getUserById(userId);
  res.render("member", { user });
}

async function updateMembership(req, res) {
  const userId = req.body.userId;
  const { membership_status } = req.body;

  try {
    await db.updateMemberStatus(userId, membership_status);
    res.redirect("/");
  } catch (err) {
    console.error("Error updating membership status:", err);
    res.status(500).send("Server error");
  }
}

async function updateAdminship(req, res) {
  const userId = req.body.userId;
  const { isAdmin } = req.body;

  try {
    await db.updateAdminStatus(userId, isAdmin);
    res.redirect("/deleteMessages");
  } catch (err) {
    console.error("Error updating admin status:", err);
    res.status(500).send("Server error");
  }
}

async function adminGet(req, res) {
  const userId = req.user.id;
  const user = await db.getUserById(userId);
  res.render("admin", { user });
}

module.exports = {
  createUser,
  updateMembership,
  memberGet,
  adminGet,
  updateAdminship,
};
