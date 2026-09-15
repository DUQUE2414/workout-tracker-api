const { getUsers, getUserID, createUser } = require("../../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getUserID);
router.post("/", createUser);

module.exports = router;