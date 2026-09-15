const { getUsers, getUserID, createUser, updateUser, deleteUser } = require("../../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUserID);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;