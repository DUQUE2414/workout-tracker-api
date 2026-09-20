const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUserID,
    createUser,
    updateUser,
    patchUser,
    deleteUser
} = require("../../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUserID);
router.post("/", createUser);
router.put("/:id", updateUser);
router.patch("/:id", patchUser);
router.delete("/:id", deleteUser);

module.exports = router;