const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const productRoute = require("./router/product.js");
const app = express();
const port = 3008;

// Set Templete engine (to handle handlebars we use engine)
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const dburl =
  "mongodb+srv://tejodhara:passwordmongodb@clustersample.n0sru.mongodb.net/?retryWrites=true&w=majority"; // atlas connection link with passowrd

// mongoose/ mongoDb connection  // three parameters
mongoose.connect(
  dburl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log(`DB connected successfully`);
    } else {
      console.log("DB connection Failed");
    }
  }
);

// controller
app.get("/", (req, res) => {
  res.render("./landingpage.handlebars");
});

// Body parser middleware (in order to use the middleware we use this app.use)
app.use(express.urlencoded({ extended: true }));

// router middleware
app.use("/products", productRoute);

app.listen(port, console.log(`Server is listen to port ${port}`));
