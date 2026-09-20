const express = require("express");
const router = express.Router();
const {
    getEntrenamientos,
    getEntrenamientoById,
    createEntrenamiento,
    updateEntrenamiento,
    patchEntrenamiento,
    deleteEntrenamiento
} = require("../../controllers/workouts.controller");

router.get("/", getEntrenamientos);
router.get("/:id", getEntrenamientoById);
router.post("/", createEntrenamiento);
router.put("/:id", updateEntrenamiento);
router.patch("/:id", patchEntrenamiento);
router.delete("/:id", deleteEntrenamiento);

module.exports = router;