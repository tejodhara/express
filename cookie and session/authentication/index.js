const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const PORT = 2040;

const uname = "megha";
const pwd = "megha";

const app = express();

// session middleware
app.use(
  session({
    secret: "thisisasecratekey",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

//cookieparser middleware
app.use(cookieParser());

//set Template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//Body parser middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./login.handlebars");
});

app.get("/user", (req, res) => {
  if (req.session.username) {
    res.render("./user.handlebars");
  } else {
    res.redirect("/");
  }
});

app.post("/login", (req, res) => {
  console.log(req.body.uname);
  if (req.body.uname === uname && req.body.password === pwd) {
    req.session.username = req.body.uname;
    console.log(req.session.username);
    res.redirect("/user");
  } else {
    // res.redirect("/");
    res.send("not validate user");
  }
});

app.listen(PORT, console.log(`listening ${PORT}`));
