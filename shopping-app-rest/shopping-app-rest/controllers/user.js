const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/user.js");

const userRegister = async (req, res, next) => {
  console.log(req.body);

  const { fname, lname, email, password, role } = req.body;
  const emailExist = await userModel.findOne({ email: email });

  try {
    if (emailExist) {
      res.json({
        error: true,
        message: "Email Alreday exist",
        data: null,
      });
    } else {
      const saltRounds = 10;
      //salting

      const salt = await bcrypt.genSalt(saltRounds);
      console.log(salt);

      //hashing
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(hashedPassword);
      await userModel.insertMany({
        fname,
        lname,
        email,
        password: hashedPassword,
        role,
      });
      res.status(200).json({
        error: false,
        message: "Registration successfull",
        data: {
          fname,
          lname,
          email,
          password,
          role,
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

const userLogin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const userData = await userModel.findOne({ email });
    console.log(userData);

    if (userData) {
      const { fname, lname, role, email } = userData;

      //Bcrypot compare
      const isPasswordMatched = await bcrypt.compare(
        password,
        userData?.password
      );
      if (isPasswordMatched) {
        const payload = { fname, email, role };
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: "24h",
        });
        res.status(200).json({
          error: false,
          message: "Login is Successfull",
          data: {
            fname,
            lname,
            email,
            role,
            token,
          },
        });
      } else {
        res.status(403).json({
          error: true,
          message: "Invalid password",
          data: null,
        });
      }
    } else {
      res.status(401).json({
        error: true,
        message: "Email not exist",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  userRegister,
  userLogin,
};
