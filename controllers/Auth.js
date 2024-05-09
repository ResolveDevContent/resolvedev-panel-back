const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const Usuario = require("../models/Usuario")
require("dotenv").config()

const register = (req, res) => {
  const { name, email, password } = req.body

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const user = new Usuario({
        name: name,
        email: email,
        password: hashedPassword,
      });

      user.save().then((result) => {
        res.status(201).send({ message: "Se ha registrado correctamente", result });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error",
        err,
      });
    })
    .catch((e) => {
      res.status(500).send({
        message: "Password no hashed succesfully",
        e,
      });
    });
}

const login = (req, res) => {
  const { email, password } = req.body
  
  Usuario.findOne({ email: email }).then((user) => {
    bcrypt
      .compare(password, user.password)
      .then((passwordCheck) => {
        if (!passwordCheck) {
          return res.status(400).send({ message: "Email y/o contraseña incorrectos.", error });
        }

        const token = jwt.sign(
          { userId: user._id, userEmail: user.email },
          process.env.SECRET,
          { expiresIn: 3 * 24 * 60 * 60 }
        );

        res.status(200).send({
          message: "Se ha logeado correctamente.",
          email: user.email,
          token,
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: "Email y/o contraseña incorrectos.",
          err,
        });
      });
  })
  .catch((e) => {
    res.status(404).send({
      message: "Email y/o contraseña incorrectos.",
      e,
    });
  });
};

module.exports = { register, login }