const express = require("express");

const router = express.Router();
const userController = require("../Controllers/UserController");
router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

module.exports = router;
