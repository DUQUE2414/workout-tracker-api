const ejercicios = [];
let idCounter = 1;

// GET /api/v1/ejercicios (Soporta query params: ?grupo_muscular=... & ?search=...)
const getEjercicios = (req, res) => {
    const { grupo_muscular, search } = req.query;
    let result = [...ejercicios];

    // 1. Filtrar por grupo muscular
    if (grupo_muscular && grupo_muscular.trim() !== "") {
        result = result.filter(ejercicio => 
            ejercicio.grupo_muscular && 
            ejercicio.grupo_muscular.toLowerCase() === grupo_muscular.trim().toLowerCase()
        );
    }

    // 2. Búsqueda por nombre de ejercicio o categoría
    if (search && search.trim() !== "") {
        result = result.filter(ejercicio => 
            (ejercicio.nombre_ejercicio && ejercicio.nombre_ejercicio.toLowerCase().includes(search.trim().toLowerCase())) ||
            (ejercicio.categoria && ejercicio.categoria.toLowerCase().includes(search.trim().toLowerCase()))
        );
    }

    res.status(200).json(result);
};

// GET /api/v1/ejercicios/:id
const getEjercicioById = (req, res) => {
    const { id } = req.params;
    const ejercicio = ejercicios.find((ejercicio) => ejercicio.id_ejercicio === Number(id));

    if (!ejercicio) {
        return res.status(404).json({ error: "Ejercicio no encontrado" });
    }

    res.status(200).json(ejercicio);
};

// POST /api/v1/ejercicios
const createEjercicio = (req, res) => {
    const { nombre_ejercicio, descripcion, categoria, grupo_muscular, nivel_dificultad } = req.body;

    if (!nombre_ejercicio || !descripcion || !categoria || !grupo_muscular) {
        return res.status(400).json({ 
            error: "Nombre del ejercicio, descripción, categoría y grupo muscular son requeridos" 
        });
    }

    const newEjercicio = {
        id_ejercicio: idCounter++,
        nombre_ejercicio,
        descripcion,
        categoria,
        grupo_muscular,
        nivel_dificultad: nivel_dificultad || "Bajo",
        fecha_registro: new Date().toISOString()
    };

    ejercicios.push(newEjercicio);
    res.status(201).json(newEjercicio);
};

// PUT /api/v1/ejercicios/:id
const updateEjercicio = (req, res) => {
    const { id } = req.params;
    const { nombre_ejercicio, descripcion, categoria, grupo_muscular, nivel_dificultad } = req.body;

    const index = ejercicios.findIndex(ejercicio => ejercicio.id_ejercicio === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Ejercicio no encontrado" });
    }

    if (!nombre_ejercicio || !descripcion || !categoria || !grupo_muscular) {
        return res.status(400).json({ 
            error: "Nombre del ejercicio, descripción, categoría y grupo muscular son requeridos" 
        });
    }

    ejercicios[index] = {
        ...ejercicios[index],
        nombre_ejercicio,
        descripcion,
        categoria,
        grupo_muscular,
        nivel_dificultad: nivel_dificultad || ejercicios[index].nivel_dificultad
    };

    res.status(200).json(ejercicios[index]);
};

// PATCH /api/v1/ejercicios/:id
const patchEjercicio = (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const index = ejercicios.findIndex(ejercicio => ejercicio.id_ejercicio === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Ejercicio no encontrado" });
    }

    // Fusiona las propiedades existentes con solo las que vengan en el body
    ejercicios[index] = {
        ...ejercicios[index],
        ...body,
        id_ejercicio: ejercicios[index].id_ejercicio // Garantiza que no modifiquen el ID
    };

    res.status(200).json(ejercicios[index]);
};

// DELETE /api/v1/ejercicios/:id
const deleteEjercicio = (req, res) => {
    const { id } = req.params;
    const index = ejercicios.findIndex(ejercicio => ejercicio.id_ejercicio === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Ejercicio no encontrado" });
    }

    const deleted = ejercicios.splice(index, 1);
    res.status(200).json({
        mensaje: "Ejercicio eliminado correctamente",
        id_ejercicio: deleted[0].id_ejercicio
    });
};

module.exports = {
    getEjercicios,
    getEjercicioById,
    createEjercicio,
    updateEjercicio,
    patchEjercicio,
    deleteEjercicio
};