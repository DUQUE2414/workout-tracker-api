const entrenamientos = [
    {
        id_entrenamiento: 1,
        id_usuario: 1,
        nombre_rutina: "Rutina de tren superior",
        fecha_programada: "2026-09-25",
        estado: "pendiente",
        observaciones: "Enfoque en fuerza",
        fecha_creacion: new Date().toISOString()
    },
    {
        id_entrenamiento: 2,
        id_usuario: 2,
        nombre_rutina: "Rutina de piernas",
        fecha_programada: "2026-09-27",
        estado: "completado",
        observaciones: "Sesión de hipertrofia",
        fecha_creacion: new Date().toISOString()
    }
];
let idCounter = 3;

// GET /api/v1/entrenamientos (Soporta query params: ?id_usuario=... & ?estado=...)
const getEntrenamientos = (req, res) => {
    const { id_usuario, estado } = req.query;
    let result = [...entrenamientos];

    // 1. Filtrar por usuario
    if (id_usuario) {
        result = result.filter(entrenamiento => entrenamiento.id_usuario === Number(id_usuario));
    }

    // 2. Filtrar por estado (pendiente, completado, cancelado)
    if (estado && estado.trim() !== "") {
        result = result.filter(entrenamiento => 
            entrenamiento.estado && entrenamiento.estado.toLowerCase() === estado.trim().toLowerCase()
        );
    }

    res.status(200).json(result);
};

// GET /api/v1/entrenamientos/:id
const getEntrenamientoById = (req, res) => {
    const { id } = req.params;
    const entrenamiento = entrenamientos.find(entrenamiento => entrenamiento.id_entrenamiento === Number(id));

    if (!entrenamiento) {
        return res.status(404).json({ error: "Entrenamiento no encontrado" });
    }

    res.status(200).json(entrenamiento);
};

// POST /api/v1/entrenamientos
const createEntrenamiento = (req, res) => {
    const { id_usuario, nombre_rutina, fecha_programada, estado, observaciones } = req.body;

    // Campos obligatorios según la especificación
    if (!id_usuario || !nombre_rutina || !fecha_programada) {
        return res.status(400).json({ 
            error: "El ID de usuario, nombre de rutina y fecha programada son requeridos" 
        });
    }

    const newEntrenamiento = {
        id_entrenamiento: idCounter++,
        id_usuario: Number(id_usuario),
        nombre_rutina,
        fecha_programada,
        estado: estado || "pendiente",
        observaciones: observaciones || "",
        fecha_creacion: new Date().toISOString()
    };

    entrenamientos.push(newEntrenamiento);
    res.status(201).json(newEntrenamiento);
};

// PUT /api/v1/entrenamientos/:id
const updateEntrenamiento = (req, res) => {
    const { id } = req.params;
    const { id_usuario, nombre_rutina, fecha_programada, estado, observaciones } = req.body;

    const index = entrenamientos.findIndex(entrenamiento => entrenamiento.id_entrenamiento === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Entrenamiento no encontrado" });
    }

    if (!id_usuario || !nombre_rutina || !fecha_programada) {
        return res.status(400).json({ 
            error: "El ID de usuario, nombre de rutina y fecha programada son requeridos" 
        });
    }

    entrenamientos[index] = {
        ...entrenamientos[index],
        id_usuario: Number(id_usuario),
        nombre_rutina,
        fecha_programada,
        estado: estado || entrenamientos[index].estado,
        observaciones: observaciones !== undefined ? observaciones : entrenamientos[index].observaciones
    };

    res.status(200).json(entrenamientos[index]);
};

// PATCH /api/v1/entrenamientos/:id
const patchEntrenamiento = (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const index = entrenamientos.findIndex(entrenamiento => entrenamiento.id_entrenamiento === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Entrenamiento no encontrado" });
    }

    entrenamientos[index] = {
        ...entrenamientos[index],
        ...body,
        id_entrenamiento: entrenamientos[index].id_entrenamiento, // Protege el ID del entrenamiento
        id_usuario: body.id_usuario ? Number(body.id_usuario) : entrenamientos[index].id_usuario // Garantiza tipo number
    };

    res.status(200).json(entrenamientos[index]);
};

// DELETE /api/v1/entrenamientos/:id
const deleteEntrenamiento = (req, res) => {
    const { id } = req.params;
    const index = entrenamientos.findIndex(entrenamiento => entrenamiento.id_entrenamiento === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: "Entrenamiento no encontrado" });
    }

    const deleted = entrenamientos.splice(index, 1);
    res.status(200).json({
        mensaje: "Entrenamiento eliminado correctamente",
        id_entrenamiento: deleted[0].id_entrenamiento
    });
};

module.exports = {
    getEntrenamientos,
    getEntrenamientoById,
    createEntrenamiento,
    updateEntrenamiento,
    patchEntrenamiento,
    deleteEntrenamiento
};