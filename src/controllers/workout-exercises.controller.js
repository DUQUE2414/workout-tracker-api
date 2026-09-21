const ejerciciosEntrenamiento = [
    {
        id_detalleEjercicio: 1,
        id_entrenamiento: 1,
        id_ejercicio: 1,
        series: 4,
        repeticiones: 12,
        peso_kilos: 40
    },
    {
        id_detalleEjercicio: 2,
        id_entrenamiento: 2,
        id_ejercicio: 2,
        series: 5,
        repeticiones: 10,
        peso_kilos: 60
    }
];
let idCounter = 3;

// GET /api/v1/ejercicios-entrenamiento (Soporta query params: ?id_entrenamiento=... & ?id_ejercicio=...)
const getEjerciciosEntrenamiento = (req, res) => {
    const { id_entrenamiento, id_ejercicio } = req.query;
    let result = [...ejerciciosEntrenamiento];

    // 1. Filtrar por entrenamiento específico
    if (id_entrenamiento) {
        result = result.filter(
            ejercicioEntrenamiento => ejercicioEntrenamiento.id_entrenamiento === Number(id_entrenamiento)
        );
    }

    // 2. Filtrar por ejercicio específico
    if (id_ejercicio) {
        result = result.filter(
            ejercicioEntrenamiento => ejercicioEntrenamiento.id_ejercicio === Number(id_ejercicio)
        );
    }

    res.status(200).json(result);
};

// GET /api/v1/ejercicios-entrenamiento/:id
const getEjercicioEntrenamientoById = (req, res) => {
    const { id } = req.params;
    const ejercicioEntrenamientoEncontrado = ejerciciosEntrenamiento.find(
        ejercicioEntrenamiento => ejercicioEntrenamiento.id_detalleEjercicio === Number(id)
    );

    if (!ejercicioEntrenamientoEncontrado) {
        return res.status(404).json({ error: "Detalle de ejercicio no encontrado" });
    }

    res.status(200).json(ejercicioEntrenamientoEncontrado);
};

// POST /api/v1/ejercicios-entrenamiento
const createEjercicioEntrenamiento = (req, res) => {
    const { id_entrenamiento, id_ejercicio, series, repeticiones, peso_kilos } = req.body;

    // Validación de campos obligatorios usando falsy check (!campo)
    if (!id_entrenamiento || !id_ejercicio || !series || !repeticiones) {
        return res.status(400).json({ 
            error: "Los campos id_entrenamiento, id_ejercicio, series y repeticiones son requeridos" 
        });
    }

    const nuevoEjercicioEntrenamiento = {
        id_detalleEjercicio: idCounter++,
        id_entrenamiento: Number(id_entrenamiento),
        id_ejercicio: Number(id_ejercicio),
        series: Number(series),
        repeticiones: Number(repeticiones),
        peso_kilos: peso_kilos ? Number(peso_kilos) : 0
    };

    ejerciciosEntrenamiento.push(nuevoEjercicioEntrenamiento);
    res.status(201).json(nuevoEjercicioEntrenamiento);
};

// PUT /api/v1/ejercicios-entrenamiento/:id
const updateEjercicioEntrenamiento = (req, res) => {
    const { id } = req.params;
    const { id_entrenamiento, id_ejercicio, series, repeticiones, peso_kilos } = req.body;

    const index = ejerciciosEntrenamiento.findIndex(
        ejercicioEntrenamiento => ejercicioEntrenamiento.id_detalleEjercicio === Number(id)
    );

    if (index === -1) {
        return res.status(404).json({ error: "Detalle de ejercicio no encontrado" });
    }

    if (!id_entrenamiento || !id_ejercicio || !series || !repeticiones) {
        return res.status(400).json({ 
            error: "Los campos id_entrenamiento, id_ejercicio, series y repeticiones son requeridos" 
        });
    }

    ejerciciosEntrenamiento[index] = {
        ...ejerciciosEntrenamiento[index],
        id_entrenamiento: Number(id_entrenamiento),
        id_ejercicio: Number(id_ejercicio),
        series: Number(series),
        repeticiones: Number(repeticiones),
        peso_kilos: peso_kilos ? Number(peso_kilos) : ejerciciosEntrenamiento[index].peso_kilos
    };

    res.status(200).json(ejerciciosEntrenamiento[index]);
};

// PATCH /api/v1/ejercicios-entrenamiento/:id
const patchEjercicioEntrenamiento = (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const index = ejerciciosEntrenamiento.findIndex(
        ejercicioEntrenamiento => ejercicioEntrenamiento.id_detalleEjercicio === Number(id)
    );

    if (index === -1) {
        return res.status(404).json({ error: "Detalle de ejercicio no encontrado" });
    }

    // Fusiona propiedades protegiendo la Primary Key (id_detalleEjercicio)
    ejerciciosEntrenamiento[index] = {
        ...ejerciciosEntrenamiento[index],
        ...body,
        id_detalleEjercicio: ejerciciosEntrenamiento[index].id_detalleEjercicio
    };

    // Asegura el tipo Number en campos numéricos recibidos en el body
    if (body.id_entrenamiento) ejerciciosEntrenamiento[index].id_entrenamiento = Number(body.id_entrenamiento);
    if (body.id_ejercicio) ejerciciosEntrenamiento[index].id_ejercicio = Number(body.id_ejercicio);
    if (body.series) ejerciciosEntrenamiento[index].series = Number(body.series);
    if (body.repeticiones) ejerciciosEntrenamiento[index].repeticiones = Number(body.repeticiones);
    if (body.peso_kilos !== undefined) ejerciciosEntrenamiento[index].peso_kilos = Number(body.peso_kilos);

    res.status(200).json(ejerciciosEntrenamiento[index]);
};

// DELETE /api/v1/ejercicios-entrenamiento/:id
const deleteEjercicioEntrenamiento = (req, res) => {
    const { id } = req.params;
    const index = ejerciciosEntrenamiento.findIndex(
        ejercicioEntrenamiento => ejercicioEntrenamiento.id_detalleEjercicio === Number(id)
    );

    if (index === -1) {
        return res.status(404).json({ error: "Detalle de ejercicio no encontrado" });
    }

    // Desestructura el elemento eliminado para no enviar el arreglo completo
    const [deleted] = ejerciciosEntrenamiento.splice(index, 1);

    res.status(200).json({
        mensaje: "Detalle de ejercicio eliminado correctamente",
        id_detalleEjercicio: deleted.id_detalleEjercicio
    });
};

module.exports = {
    getEjerciciosEntrenamiento,
    getEjercicioEntrenamientoById,
    createEjercicioEntrenamiento,
    updateEjercicioEntrenamiento,
    patchEjercicioEntrenamiento,
    deleteEjercicioEntrenamiento
};