# Workout Tracker API

API RESTful desarrollada con Node.js y Express para la gestión integral de usuarios, catálogo de ejercicios, entrenamientos y el registro relacional de ejercicios por rutina.

---

## 🚀 1. Módulo de Usuarios (`/api/v1/usuarios`)

### 📋 Endpoints

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/usuarios` | Listar usuarios (Filtros: `?nivel_experiencia=` y `?search=`) | Pública / 200 OK o 404 Not Found |
| **GET** | `/api/v1/usuarios/:id` | Obtener un usuario específico por su ID (`id_usuario`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/usuarios` | Registrar un nuevo usuario en el sistema | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/usuarios/:id` | Actualización integral de un usuario | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/usuarios/:id` | Actualización parcial de datos de un usuario | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/usuarios/:id` | Eliminar un usuario del sistema | Pública / 200 OK o 404 Not Found |

### 📝 Ejemplos de Request y Response

* **GET** `/api/v1/usuarios?nivel_experiencia=Intermedio`
  * **Response (`200 OK`):**
    ```json
    [
      {
        "id_usuario": 1,
        "nombre_completo": "Juan Pérez",
        "correo_electronico": "juan.perez@example.com",
        "nivel_experiencia": "Intermedio",
        "fecha_registro": "2026-09-21T18:00:00.000Z"
      }
    ]
    ```

* **GET** `/api/v1/usuarios/999`
  * **Response (`404 Not Found`):**
    ```json
    {
      "error": "Usuario no encontrado"
    }
    ```

* **POST** `/api/v1/usuarios`
  * **Request Body:**
    ```json
    {
      "nombre_completo": "Carlos Gómez",
      "correo_electronico": "carlos.gomez@example.com",
      "nivel_experiencia": "Principiante"
    }
    ```
  * **Response (`201 Created`):**
    ```json
    {
      "id_usuario": 3,
      "nombre_completo": "Carlos Gómez",
      "correo_electronico": "carlos.gomez@example.com",
      "nivel_experiencia": "Principiante",
      "fecha_registro": "2026-09-21T18:00:00.000Z"
    }
    ```
  * **Response (`400 Bad Request`):**
    ```json
    {
      "error": "Nombre completo y correo electrónico son requeridos"
    }
    ```

* **PUT** `/api/v1/usuarios/1`
  * **Request Body:**
    ```json
    {
      "nombre_completo": "Juan Pérez Actualizado",
      "correo_electronico": "juan.nuevo@example.com",
      "nivel_experiencia": "Avanzado"
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_usuario": 1,
      "nombre_completo": "Juan Pérez Actualizado",
      "correo_electronico": "juan.nuevo@example.com",
      "nivel_experiencia": "Avanzado",
      "fecha_registro": "2026-09-21T18:00:00.000Z"
    }
    ```

* **PATCH** `/api/v1/usuarios/1`
  * **Request Body:**
    ```json
    {
      "nivel_experiencia": "Avanzado"
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_usuario": 1,
      "nombre_completo": "Juan Pérez",
      "correo_electronico": "juan.perez@example.com",
      "nivel_experiencia": "Avanzado",
      "fecha_registro": "2026-09-21T18:00:00.000Z"
    }
    ```

* **DELETE** `/api/v1/usuarios/1`
  * **Response (`200 OK`):**
    ```json
    {
      "mensaje": "Usuario eliminado correctamente",
      "id_usuario": 1
    }
    ```

### 🚦 Códigos de Estado del Módulo
| Código | Estado | Descripción |
| :---: | :--- | :--- |
| **`200`** | **OK** | Solicitud procesada correctamente (`GET`, `PUT`, `PATCH`, `DELETE`). |
| **`201`** | **Created** | Usuario registrado exitosamente (`POST`). |
| **`400`** | **Bad Request** | Falta `nombre_completo` o `correo_electronico` (`POST`, `PUT`). |
| **`404`** | **Not Found** | Usuario no encontrado por ID o nivel de experiencia no registrado (`GET`, `PUT`, `PATCH`, `DELETE`). |

---

## 🏋️ 2. Módulo de Ejercicios (`/api/v1/ejercicios`)

### 📋 Endpoints

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/ejercicios` | Obtener catálogo de ejercicios (Filtros: `?grupo_muscular=` y `?search=`) | Pública / 200 OK |
| **GET** | `/api/v1/ejercicios/:id` | Obtener un ejercicio específico por su ID (`id_ejercicio`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/ejercicios` | Crear un nuevo ejercicio en el catálogo maestro | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/ejercicios/:id` | Actualización integral de un ejercicio | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/ejercicios/:id` | Actualización parcial de un ejercicio | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/ejercicios/:id` | Eliminar un ejercicio del catálogo | Pública / 200 OK o 404 Not Found |

### 📝 Ejemplos de Request y Response

* **GET** `/api/v1/ejercicios/1`
  * **Response (`200 OK`):**
    ```json
    {
      "id_ejercicio": 1,
      "nombre_ejercicio": "Press de banca",
      "descripcion": "Ejercicio de empuje horizontal para pecho, hombros y tríceps",
      "categoria": "Fuerza",
      "grupo_muscular": "Pecho",
      "nivel_dificultad": "Medio",
      "fecha_registro": "2026-09-21T18:00:00.000Z"
    }
    ```

* **POST** `/api/v1/ejercicios`
  * **Request Body:**
    ```json
    {
      "nombre_ejercicio": "Dominadas",
      "descripcion": "Ejercicio de tracción vertical para espalda y bíceps",
      "categoria": "Calistenia",
      "grupo_muscular": "Espalda",
      "nivel_dificultad": "Medio"
    }
    ```
  * **Response (`201 Created`):**
    ```json
    {
      "id_ejercicio": 3,
      "nombre_ejercicio": "Dominadas",
      "descripcion": "Ejercicio de tracción vertical para espalda y bíceps",
      "categoria": "Calistenia",
      "grupo_muscular": "Espalda",
      "nivel_dificultad": "Medio",
      "fecha_registro": "2026-09-21T18:00:00.000Z"
    }
    ```
  * **Response (`400 Bad Request`):**
    ```json
    {
      "error": "Nombre del ejercicio, descripción, categoría y grupo muscular son requeridos"
    }
    ```

* **PUT** `/api/v1/ejercicios/1`
  * **Request Body:**
    ```json
    {
      "nombre_ejercicio": "Press de Banca Inclinado",
      "descripcion": "Ejercicio compuesto para la porción superior del pecho",
      "categoria": "Fuerza",
      "grupo_muscular": "Pecho",
      "nivel_dificultad": "Alto"
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_ejercicio": 1,
      "nombre_ejercicio": "Press de Banca Inclinado",
      "descripcion": "Ejercicio compuesto para la porción superior del pecho",
      "categoria": "Fuerza",
      "grupo_muscular": "Pecho",
      "nivel_dificultad": "Alto",
      "fecha_registro": "2026-09-21T18:00:00.000Z"
    }
    ```

* **PATCH** `/api/v1/ejercicios/1`
  * **Request Body:**
    ```json
    {
      "nivel_dificultad": "Alto"
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_ejercicio": 1,
      "nombre_ejercicio": "Press de banca",
      "descripcion": "Ejercicio de empuje horizontal para pecho, hombros y tríceps",
      "categoria": "Fuerza",
      "grupo_muscular": "Pecho",
      "nivel_dificultad": "Alto",
      "fecha_registro": "2026-09-21T18:00:00.000Z"
    }
    ```

* **DELETE** `/api/v1/ejercicios/1`
  * **Response (`200 OK`):**
    ```json
    {
      "mensaje": "Ejercicio eliminado correctamente",
      "id_ejercicio": 1
    }
    ```

### 🚦 Códigos de Estado del Módulo
| Código | Estado | Descripción |
| :---: | :--- | :--- |
| **`200`** | **OK** | Operación exitosa (`GET`, `PUT`, `PATCH`, `DELETE`). |
| **`201`** | **Created** | Ejercicio registrado correctamente (`POST`). |
| **`400`** | **Bad Request** | Falta `nombre_ejercicio`, `descripcion`, `categoria` o `grupo_muscular` (`POST`, `PUT`). |
| **`404`** | **Not Found** | Ejercicio no encontrado por ID (`GET`, `PUT`, `PATCH`, `DELETE`). |

---

## 📅 3. Módulo de Entrenamientos (`/api/v1/entrenamientos`)

### 📋 Endpoints

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/entrenamientos` | Listar entrenamientos (Filtros: `?id_usuario=` y `?estado=`) | Pública / 200 OK |
| **GET** | `/api/v1/entrenamientos/:id` | Obtener un entrenamiento específico por su ID (`id_entrenamiento`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/entrenamientos` | Crear una nueva sesión o rutina de entrenamiento | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/entrenamientos/:id` | Actualización integral de un entrenamiento | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/entrenamientos/:id` | Actualización parcial (`estado`, `observaciones`, etc.) | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/entrenamientos/:id` | Eliminar una sesión de entrenamiento | Pública / 200 OK o 404 Not Found |

### 📝 Ejemplos de Request y Response

* **GET** `/api/v1/entrenamientos?id_usuario=1&estado=pendiente`
  * **Response (`200 OK`):**
    ```json
    [
      {
        "id_entrenamiento": 1,
        "id_usuario": 1,
        "nombre_rutina": "Rutina de tren superior",
        "fecha_programada": "2026-09-25",
        "estado": "pendiente",
        "observaciones": "Enfoque en fuerza",
        "fecha_creacion": "2026-09-21T18:00:00.000Z"
      }
    ]
    ```

* **POST** `/api/v1/entrenamientos`
  * **Request Body:**
    ```json
    {
      "id_usuario": 1,
      "nombre_rutina": "Rutina de Espalda y Bíceps",
      "fecha_programada": "2026-09-28",
      "observaciones": "Enfoque en hipertrofia"
    }
    ```
  * **Response (`201 Created`):**
    ```json
    {
      "id_entrenamiento": 3,
      "id_usuario": 1,
      "nombre_rutina": "Rutina de Espalda y Bíceps",
      "fecha_programada": "2026-09-28",
      "estado": "pendiente",
      "observaciones": "Enfoque en hipertrofia",
      "fecha_creacion": "2026-09-21T18:00:00.000Z"
    }
    ```
  * **Response (`400 Bad Request`):**
    ```json
    {
      "error": "El ID de usuario, nombre de rutina y fecha programada son requeridos"
    }
    ```

* **PUT** `/api/v1/entrenamientos/1`
  * **Request Body:**
    ```json
    {
      "id_usuario": 1,
      "nombre_rutina": "Rutina de Torso Completo",
      "fecha_programada": "2026-09-30",
      "estado": "completado",
      "observaciones": "Se completaron todas las series"
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_entrenamiento": 1,
      "id_usuario": 1,
      "nombre_rutina": "Rutina de Torso Completo",
      "fecha_programada": "2026-09-30",
      "estado": "completado",
      "observaciones": "Se completaron todas las series",
      "fecha_creacion": "2026-09-21T18:00:00.000Z"
    }
    ```

* **PATCH** `/api/v1/entrenamientos/1`
  * **Request Body:**
    ```json
    {
      "estado": "completado"
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_entrenamiento": 1,
      "id_usuario": 1,
      "nombre_rutina": "Rutina de tren superior",
      "fecha_programada": "2026-09-25",
      "estado": "completado",
      "observaciones": "Enfoque en fuerza",
      "fecha_creacion": "2026-09-21T18:00:00.000Z"
    }
    ```

* **DELETE** `/api/v1/entrenamientos/1`
  * **Response (`200 OK`):**
    ```json
    {
      "mensaje": "Entrenamiento eliminado correctamente",
      "id_entrenamiento": 1
    }
    ```

### 🚦 Códigos de Estado del Módulo
| Código | Estado | Descripción |
| :---: | :--- | :--- |
| **`200`** | **OK** | Solicitud procesada exitosamente (`GET`, `PUT`, `PATCH`, `DELETE`). |
| **`201`** | **Created** | Entrenamiento creado exitosamente (`POST`). |
| **`400`** | **Bad Request** | Falta `id_usuario`, `nombre_rutina` o `fecha_programada` (`POST`, `PUT`). |
| **`404`** | **Not Found** | Entrenamiento no encontrado por ID (`GET`, `PUT`, `PATCH`, `DELETE`). |

---

## 🔗 4. Módulo Ejercicios-Entrenamiento (`/api/v1/ejercicios-entrenamiento`)

### 📋 Endpoints

| Método | Endpoint | Descripción | Restricción / Estado |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/v1/ejercicios-entrenamiento` | Listar asignaciones (Filtros: `?id_entrenamiento=` y `?id_ejercicio=`) | Pública / 200 OK |
| **GET** | `/api/v1/ejercicios-entrenamiento/:id` | Obtener detalle por su ID (`id_detalleEjercicio`) | Pública / 200 OK o 404 Not Found |
| **POST** | `/api/v1/ejercicios-entrenamiento` | Asignar ejercicio a rutina (`series`, `repeticiones`, `peso_kilos`) | Pública / 201 Created o 400 Bad Request |
| **PUT** | `/api/v1/ejercicios-entrenamiento/:id` | Actualización integral de la asignación | Pública / 200 OK, 400 Bad Request o 404 Not Found |
| **PATCH** | `/api/v1/ejercicios-entrenamiento/:id` | Actualización parcial (`series`, `repeticiones`, `peso_kilos`) | Pública / 200 OK o 404 Not Found |
| **DELETE** | `/api/v1/ejercicios-entrenamiento/:id` | Eliminar el detalle de un ejercicio en la rutina | Pública / 200 OK o 404 Not Found |

### 📝 Ejemplos de Request y Response

* **GET** `/api/v1/ejercicios-entrenamiento/1`
  * **Response (`200 OK`):**
    ```json
    {
      "id_detalleEjercicio": 1,
      "id_entrenamiento": 1,
      "id_ejercicio": 1,
      "series": 4,
      "repeticiones": 12,
      "peso_kilos": 40
    }
    ```

* **POST** `/api/v1/ejercicios-entrenamiento`
  * **Request Body:**
    ```json
    {
      "id_entrenamiento": 1,
      "id_ejercicio": 1,
      "series": 4,
      "repeticiones": 10,
      "peso_kilos": 50
    }
    ```
  * **Response (`201 Created`):**
    ```json
    {
      "id_detalleEjercicio": 3,
      "id_entrenamiento": 1,
      "id_ejercicio": 1,
      "series": 4,
      "repeticiones": 10,
      "peso_kilos": 50
    }
    ```
  * **Response (`400 Bad Request`):**
    ```json
    {
      "error": "Los campos id_entrenamiento, id_ejercicio, series y repeticiones son requeridos"
    }
    ```

* **PUT** `/api/v1/ejercicios-entrenamiento/1`
  * **Request Body:**
    ```json
    {
      "id_entrenamiento": 1,
      "id_ejercicio": 1,
      "series": 5,
      "repeticiones": 8,
      "peso_kilos": 60
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_detalleEjercicio": 1,
      "id_entrenamiento": 1,
      "id_ejercicio": 1,
      "series": 5,
      "repeticiones": 8,
      "peso_kilos": 60
    }
    ```

* **PATCH** `/api/v1/ejercicios-entrenamiento/1`
  * **Request Body:**
    ```json
    {
      "peso_kilos": 45
    }
    ```
  * **Response (`200 OK`):**
    ```json
    {
      "id_detalleEjercicio": 1,
      "id_entrenamiento": 1,
      "id_ejercicio": 1,
      "series": 4,
      "repeticiones": 12,
      "peso_kilos": 45
    }
    ```

* **DELETE** `/api/v1/ejercicios-entrenamiento/1`
  * **Response (`200 OK`):**
    ```json
    {
      "mensaje": "Detalle de ejercicio eliminado correctamente",
      "id_detalleEjercicio": 1
    }
    ```

### 🚦 Códigos de Estado del Módulo
| Código | Estado | Descripción |
| :---: | :--- | :--- |
| **`200`** | **OK** | Petición procesada con éxito (`GET`, `PUT`, `PATCH`, `DELETE`). |
| **`201`** | **Created** | Asignación creada exitosamente (`POST`). |
| **`400`** | **Bad Request** | Falta `id_entrenamiento`, `id_ejercicio`, `series` o `repeticiones` (`POST`, `PUT`). |
| **`404`** | **Not Found** | Detalle de ejercicio no encontrado por ID (`GET`, `PUT`, `PATCH`, `DELETE`). |

---

## 🛠️ Tecnologías Utilizadas
- **Node.js**
- **Express.js**
- **JavaScript (ES6+)**
- **Arquitectura de Software:** MVC (Controladores In-Memory y Enrutamiento Modular)