const express = require("express");
const router = express.Router();
const {
    getEjercicios,
    getEjercicioById,
    createEjercicio,
    updateEjercicio,
    deleteEjercicio
} = require("../../controllers/exercises.controller");

router.get("/", getEjercicios);
router.get("/:id", getEjercicioById);
router.post("/", createEjercicio);
router.put("/:id", updateEjercicio);
router.delete("/:id", deleteEjercicio);

module.exports = router;