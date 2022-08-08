const jwt = require("jsonwebtoken");

const authorizeUserAndAdmin = (req, res, next) => {
  console.log(req.headers.authorization.split(" ")[1]);
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    console.log(payload);
    if (payload.role === "user" || payload.role === "admin") {
      next();
    } else {
      res.status(401).json({
        error: true,
        message: "Authorization failed",
        data: null,
      });
    }
  } else {
    res.status(401).json({
      error: true,
      message: "Not Authorized",
      data: null,
    });
  }
};

const authorizeAdmin = (req, res, next) => {
  console.log(req.headers.authorization);
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    if (payload.role === 'admin') {
      next();
    } else {
      res.status(401).json({
        error: true,
        message: "Authorization failed",
        data: null,
      });
    }
  } else {
    res.status(401).json({
      error: true,
      message: "Not Authorized",
      data: null,
    });
  }
};

module.exports = {
  authorizeUserAndAdmin,
  authorizeAdmin
};
