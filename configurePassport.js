const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("./db/queries");
const passport = require("passport");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const rows = await db.getUser(username);

      if (rows.length === 0) {
        return done(null, false, { message: "Incorrect username" });
      }

      const user = rows[0];
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const rows = await db.getId(id);
    const user = rows[0];
    done(null, user);
  } catch (err) {
    done(err);
  }
});
