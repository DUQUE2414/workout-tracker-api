const express = require("express");
const router = express.Router();
const v1Routes = require('./v1'); // Apunta a src/routes/v1/index.js


// GET /api
router.get('/', (req, res) => {
    res.json({
        "message": "Workout Tracker API",
        "versions": ["v1"],
        "endpoints": {
            v1: "/api/v1"
        }
    });
});

router.use("/v1", v1Routes);

module.exports = router;