const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.routes");
const exercisesRoutes = require("./exercises.routes");
const workoutsRoutes = require("./workouts.routes");
const workoutExercisesRoutes = require("./workout-exercises.routes");

router.use("/usuarios", usersRoutes);
router.use("/ejercicios", exercisesRoutes);
router.use("/entrenamientos", workoutsRoutes);
router.use("/ejercicios-entrenamiento", workoutExercisesRoutes);

module.exports = router;