const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
require("./configurePassport");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRouter = require("./routes/index");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const newMessageRouter = require("./routes/newMessage");
const homeRouter = require("./routes/home");
const memberRouter = require("./routes/member");
const adminRouter = require("./routes/admin");
const deleteMessage = require("./routes/deleteMessage");

const PORT = process.env.PORT || 3000;

app.use("/", indexRouter);
app.use("/sign-up", signupRouter);
app.use("/log-in", loginRouter);
app.use("/logout", logoutRouter);
app.use("/newMessage", newMessageRouter);
app.use("/home", homeRouter);
app.use("/member", memberRouter);
app.use("/admin", adminRouter);
app.use("/deletemessages", deleteMessage);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
