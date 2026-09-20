// src/routes/v1/index.js
const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");
const exercisesRoutes = require("./exercises.routes");
const workoutsRoutes = require("./workouts.routes");

router.use("/usuarios", usersRoutes);
router.use("/ejercicios", exercisesRoutes);
router.use("/entrenamientos", workoutsRoutes);

module.exports = router;