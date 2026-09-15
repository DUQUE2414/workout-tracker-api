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


// POST /api/v1/users
const createUser = (req, res) => {
    const { name, email, role } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Name y email son requeridos" });
    }

    const newUser = {
        id: Id++,
        name,
        email,
        role: role || "user",
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    res.status(201).json(newUser);
};

module.exports = {
    getUsers,
    getUserID,
    createUser
};