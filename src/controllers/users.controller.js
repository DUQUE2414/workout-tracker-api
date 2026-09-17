const usuarios = [];
let idCounter = 1;

// GET /api/v1/usuarios (Soporta query params: ?nivel_experiencia=... & ?search=...)
const getUsers = (req, res) => {
    const { nivel_experiencia, search } = req.query;
    let result = [...usuarios];

    // 1. Filtrar por nivel de experiencia
    if (nivel_experiencia && nivel_experiencia.trim() !== "") {
        result = result.filter(usuario => 
            usuario.nivel_experiencia && usuario.nivel_experiencia.toLowerCase() === nivel_experiencia.trim().toLowerCase()
        );

        if (result.length === 0) {
            return res.status(404).json({ error: "Este nivel de experiencia no está registrado" });
        }
    }

    // 2. Búsqueda por nombre
    if (search && search.trim() !== "") {
        result = result.filter(usuario => 
            usuario.nombre_completo && usuario.nombre_completo.toLowerCase().includes(search.trim().toLowerCase())
        );
    }

    res.status(200).json(result);
};

// GET /api/v1/usuarios/:id
const getUserID = (req, res) => {
    const { id } = req.params;
    const user = usuarios.find((usuario) => usuario.id_usuario === Number(id));

    if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(user);
};

// POST /api/v1/usuarios
const createUser = (req, res) => {
    const { nombre_completo, correo_electronico, nivel_experiencia } = req.body;

    // Validación básica de campos requeridos
    if (!nombre_completo || !correo_electronico) {
        return res.status(400).json({ error: "Nombre completo y correo electrónico son requeridos" });
    }

    const newUser = {
        id_usuario: idCounter++,
        nombre_completo,
        correo_electronico,
        nivel_experiencia: nivel_experiencia || "Principiante",
        fecha_registro: new Date().toISOString()
    };

    usuarios.push(newUser);
    res.status(201).json(newUser);
};

// PUT /api/v1/usuarios/:id
const updateUser = (req, res) => {
    const { id } = req.params;
    const { nombre_completo, correo_electronico, nivel_experiencia } = req.body;

    const index = usuarios.findIndex(usuario => usuario.id_usuario === Number(id));
    if (index === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (!nombre_completo || !correo_electronico) {                  
        return res.status(400).json({ error: "Nombre completo y correo electrónico son requeridos" });
    }

    usuarios[index] = {
        ...usuarios[index],
        nombre_completo,
        correo_electronico,
        nivel_experiencia: nivel_experiencia || usuarios[index].nivel_experiencia
    };

    res.status(200).json(usuarios[index]);
};

// DELETE /api/v1/usuarios/:id
const deleteUser = (req, res) => {
    const { id } = req.params;
    const index = usuarios.findIndex(usuario => usuario.id_usuario === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const deleted = usuarios.splice(index, 1);
    res.status(200).json({
        mensaje: "Usuario eliminado correctamente",
        id_usuario: deleted[0].id_usuario
    });
};

module.exports = {
    getUsers,
    getUserID,
    createUser,
    updateUser,
    deleteUser
};