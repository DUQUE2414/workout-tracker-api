// src/routes/v1/index.js
const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");
const exercisesRoutes = require("./exercises.routes");
const workoutsRoutes = require("./workouts.routes");

router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/workouts', workoutsRoutes);

module.exports = router;