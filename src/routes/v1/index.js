const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");
const exercisesRoutes = require("./exercises.routes");
const workoutsRoutes = require("./workouts.routes");
const workoutExercisesRoutes = require("./workout-exercises.routes");

router.use('/users', usersRoutes);
router.use('/exercises', exercisesRoutes);
router.use('/workouts', workoutsRoutes);
router.use('/workout-exercises', workoutExercisesRoutes);

module.exports = router;