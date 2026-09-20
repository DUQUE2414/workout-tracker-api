const express = require("express");
const router = express.Router();
const {
    getEjerciciosEntrenamiento,
    getEjercicioEntrenamientoById,
    createEjercicioEntrenamiento,
    updateEjercicioEntrenamiento,
    patchEjercicioEntrenamiento,
    deleteEjercicioEntrenamiento
} = require("../../controllers/workout-exercises.controller");

router.get("/", getEjerciciosEntrenamiento);
router.get("/:id", getEjercicioEntrenamientoById);
router.post("/", createEjercicioEntrenamiento);
router.put("/:id", updateEjercicioEntrenamiento);
router.patch("/:id", patchEjercicioEntrenamiento);
router.delete("/:id", deleteEjercicioEntrenamiento);

module.exports = router;