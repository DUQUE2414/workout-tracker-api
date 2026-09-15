const express = require("express");
const router = express.Router();
const { getUsers, getUserID } = require("../../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUserID);

module.exports = router;