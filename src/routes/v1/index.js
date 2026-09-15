const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");

// /api/v1/users
router.use("/users", usersRoutes);

module.exports = router;