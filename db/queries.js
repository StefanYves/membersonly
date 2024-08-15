const pool = require("./pool");

async function addUser(firstName, lastName, username, password) {
  const { rows } = await pool.query(
    "INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, username, password]
  );
}

async function getUser(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows;
}

async function getId(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows;
}

async function addMessage(title, text, userId) {
  const { rows } = await pool.query(
    "INSERT INTO messages (title, text, user_id) VALUES ($1, $2, $3) RETURNING *",
    [title, text, userId]
  );
  return rows[0];
}

async function getMessages() {
  const { rows } = await pool.query(`SELECT 
      messages.id AS message_id, 
      messages.title, 
      messages.timestamp, 
      messages.text, 
      users.id AS user_id, 
      users.firstname, 
      users.lastname, 
      users.username
    FROM 
      messages
    JOIN 
      users 
    ON 
      messages.user_id = users.id`);
  return rows;
}

async function updateMemberStatus(userId, membership_status) {
  const { rows } = await pool.query(
    "UPDATE users SET membership_status = $1 WHERE id = $2 RETURNING *",
    [membership_status, userId]
  );
  return rows[0];
}

async function updateAdminStatus(userId, isAdmin) {
  const { rows } = await pool.query(
    "UPDATE users SET isadmin = $1 WHERE id = $2 RETURNING *",
    [isAdmin, userId]
  );
  return rows[0];
}

async function getUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}

module.exports = {
  addUser,
  getUser,
  getId,
  addMessage,
  getMessages,
  updateMemberStatus,
  updateAdminStatus,
  getUserById,
  deleteMessage,
};
