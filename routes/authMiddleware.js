module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/log-in");
  }
};

module.exports.isMember = (req, res, next) => {
  if (req.isAuthenticated() && req.user.membership_status) {
    next();
  } else {
    const referer = req.get("Referer") || req.query.redirectFrom;

    if (referer) {
      if (referer.includes("/admin")) {
        res.redirect("/admin");
      } else {
        res.redirect("/home");
      }
    } else {
      res.redirect("/home");
    }
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.isadmin) {
    next();
  } else {
    res.redirect("/");
  }
};
