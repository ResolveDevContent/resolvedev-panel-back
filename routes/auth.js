const express = require("express");
const { register, login } = require("../controllers/Auth");
const { authenticate } = require("../middlewares/Auth")

const router = express.Router();

router.post("/register", register)
router.post("/login", login)

router.get("/perfil", authenticate, (req, res) => {
    res.json({ message: "Tu email: " + req.user.email})
})

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
});

module.exports = router;