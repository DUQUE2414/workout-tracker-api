# Workout Tracker API

API RESTful desarrollada con Node.js y Express para gestionar usuarios, catálogo de ejercicios, entrenamientos y el registro detallado de volumen de trabajo por ejercicio.

---

## 🚀 Endpoints del Módulo de Usuarios (`/api/v1/usuarios`)

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/usuarios` | Listar todos los usuarios | Pública / 200 OK |
| **GET** | `/api/v1/usuarios/:id` | Obtener un usuario específico por su ID (`id_usuario`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/usuarios` | Registrar un nuevo usuario en el sistema | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/usuarios/:id` | Actualización integral de un usuario | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/usuarios/:id` | Actualización parcial de datos de un usuario | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/usuarios/:id` | Eliminar un usuario del sistema | Pública / 200 OK o 404 Not Found |

---

## 🏋️ Endpoints del Módulo de Ejercicios (`/api/v1/ejercicios`)

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/ejercicios` | Obtener el catálogo de ejercicios (Filtro: `?grupo_muscular=`) | Pública / 200 OK |
| **GET** | `/api/v1/ejercicios/:id` | Obtener un ejercicio específico por su ID (`id_ejercicio`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/ejercicios` | Crear un nuevo ejercicio en el catálogo maestro | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/ejercicios/:id` | Actualización integral de un ejercicio | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/ejercicios/:id` | Actualización parcial de información de un ejercicio | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/ejercicios/:id` | Eliminar un ejercicio del catálogo | Pública / 200 OK o 404 Not Found |

---

## 📅 Endpoints del Módulo de Entrenamientos (`/api/v1/entrenamientos`)

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/entrenamientos` | Listar todos los entrenamientos (Filtros: `?id_usuario=` y `?estado=`) | Pública / 200 OK |
| **GET** | `/api/v1/entrenamientos/:id` | Obtener un entrenamiento específico por su ID (`id_entrenamiento`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/entrenamientos` | Crear una nueva sesión o rutina de entrenamiento | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/entrenamientos/:id` | Actualización integral de un entrenamiento | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/entrenamientos/:id` | Actualización parcial (ej. cambiar `estado` u `observaciones`) | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/entrenamientos/:id` | Eliminar una sesión de entrenamiento | Pública / 200 OK o 404 Not Found |

---

## 🔗 Endpoints del Módulo Relacional (`/api/v1/ejercicios-entrenamiento`)

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/ejercicios-entrenamiento` | Listar asignaciones (Filtros: `?id_entrenamiento=` y `?id_ejercicio=`) | Pública / 200 OK |
| **GET** | `/api/v1/ejercicios-entrenamiento/:id` | Obtener un detalle específico por su ID (`id_detalleEjercicio`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/ejercicios-entrenamiento` | Asignar un ejercicio a un entrenamiento (series, reps, peso) | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/ejercicios-entrenamiento/:id` | Actualización integral de las series/reps/peso asignados | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/ejercicios-entrenamiento/:id` | Ajuste parcial de carga (`peso_kilos`), `series` o `repeticiones` | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/ejercicios-entrenamiento/:id` | Eliminar el detalle de un ejercicio en la rutina | Pública / 200 OK o 404 Not Found |

---

## 🛠️ Tecnologías Utilizadas
- **Node.js**
- **Express**
- **JavaScript (ES6+)**
- **Arquitectura MVC (Model-View-Controller)**