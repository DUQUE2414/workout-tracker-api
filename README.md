# 🏋️ Workout Tracker API

API RESTful desarrollada con **Node.js** y **Express.js**, construida bajo la arquitectura **MVC (Controller-Route)** y estructurada con un esquema de enrutamiento versionado (`/api/v1`).

---

## 📂 Arquitectura del Proyecto

El proyecto implementa una separación de responsabilidades en capas para garantizar un código limpio, modular y mantenible:

```text
workout-tracker-api/
├── .env                  # Variables de entorno
├── .gitignore            # Archivos excluidos de Git
├── package.json          # Dependencias y scripts
├── README.md             # Documentación general de la API
└── src/
    ├── app.js            # Punto de entrada de Express
    ├── config/
    │   └── env.js        # Centralización de variables de entorno
    ├── controllers/
    │   └── users.controller.js  # Lógica de negocio y almacenamiento en memoria
    └── routes/
        ├── index.js      # Enrutador principal (/api)
        └── v1/
            ├── index.js       # Agrupador de rutas versión 1
            └── users.routes.js # Rutas del recurso /users



