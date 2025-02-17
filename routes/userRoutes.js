const express = require("express");
const { createUser } = require("../controllers/userController");
const router = express.Router();

// Create User
router.post("/createUser", createUser);

module.exports = router;
