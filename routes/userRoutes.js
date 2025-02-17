const express = require("express");
const { createUser, fetchUserList, fetchUserProject } = require("../controllers/userController");
const router = express.Router();

// Create User
router.post("/createUser", createUser);

// Get All Users
router.post("/getUsers", fetchUserList);

module.exports = router;
