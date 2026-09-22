const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");

// Monta el recurso en /api/v1/usuarios

router.use('/users', usersRoutes);

module.exports = router;