const users = [];
let Id = 1;

// GET /api/v1/users
const getUsers = (req, res) => {
    res.status(200).json(users);
};

// GET /api/v1/users/:id
const getUserID = (req, res) => {
    const { id } = req.params;
    const user = users.find((usuario) => usuario.id === Number(id));

    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
};

module.exports = {
    getUsers,
    getUserID
};