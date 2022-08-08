let express = require("express");
let app = express();
let PORT = 5070;
const cookieParser = require("cookie-parser");
const { cookie } = require("express/lib/response");

app.use(cookieParser());
//Cookie creation
app.get("/cookie-created", (req, res) => {
  res.cookie("mycookie", "Jithu"); //created the cookie
  res.send("Cookie created");
});

// object cookie
app.get("/object-cookie", (req, res) => {
    res.cookie("data", {
      username: "Naveen",
      email: "naveen@gmail.com",
    });
    res.send("Object Cookie created");
  });


   
//read-cookie
app.get("/read-cookie", (req, res) => {
    console.log(req.cookies);
    if (Object.keys(req.cookies).length >= 1) {
      res.send(req.cookies);
    } else {
      res.send("Cookies are not present");
    }
  });
  

app.listen(PORT, console.log(`the aplication is running in ${PORT}`));
