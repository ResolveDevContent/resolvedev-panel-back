const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const register = (req, res, model) => {
  const { name, email, password } = req.body

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const user = new model({
        name: name,
        email: email,
        password: hashedPassword,
      });
      
      const token = jwt.sign(
        { userId: user._id, userEmail: user.email },
        process.env.SECRET,
        { expiresIn: 3 * 24 * 60 * 60 }
      );

      user.save().then((result) => {
        res.status(201).send({ message: "Se ha registrado correctamente", result, token });
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

const login = (req, res, model) => {
  const { email, password } = req.body
  
  model.findOne({ email: email }).then((user) => {
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

const update = (req,res,model) => {
  const { id } = req.params;
  model.findOne({ _id: id }).then((data) => {
    if(!data) { res.status(400).json({message: "No encontrado"})}
  
    const password = req.body.password,
          name = req.body.name,
          email = req.body.email;
    
    bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      const user = {
        name: name,
        email: email,
        password: hashedPassword,
      };

      Object.assign(data, user)
      data.save().then((result) => {
          res.status(200).json({message: "Se ha modificado correctamente"})
      }).catch((err) => {
          res.status(400).json({message: err.message})
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error",
        err,
      });
    })
  })
}

module.exports = { register, login, update }