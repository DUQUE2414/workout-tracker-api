const express = require("express");
const router = express.Router();
const {
    getEjercicios,
    getEjercicioById,
    createEjercicio,
    updateEjercicio,
    patchEjercicio,
    deleteEjercicio
} = require("../../controllers/exercises.controller");

router.get("/", getEjercicios);
router.get("/:id", getEjercicioById);
router.post("/", createEjercicio);
router.put("/:id", updateEjercicio);
router.patch("/:id",patchEjercicio)
router.delete("/:id", deleteEjercicio);

module.exports = router;