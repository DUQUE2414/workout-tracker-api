const { getUsers, getUserID, createUser, updateUser } = require("../../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUserID);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;