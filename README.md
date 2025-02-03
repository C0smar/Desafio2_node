# Desafío - Mi Repertorio 

Este proyecto es un servidor backend desarrollado con **Express.js** que permite gestionar un repertorio de canciones mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Las canciones se almacenan en un archivo JSON local llamado `repertorio.json`.

## Descripción del Proyecto

La escuela de música "E-Sueño" necesita una aplicación para gestionar las canciones que sus estudiantes cantarán en presentaciones en vivo. Este servidor permite:

- **Agregar** nuevas canciones al repertorio.
- **Listar** todas las canciones registradas.
- **Editar** canciones existentes.
- **Eliminar** canciones del repertorio.

El servidor está diseñado para ser consumido por una aplicación cliente que se proporciona en el archivo `index.html`.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) 

## Instalación

1. **Clona el repositorio** en tu máquina local:

   ```bash
   git clone https://github.com/C0smar/Desafio2_node.git

2. Navega al directorio del proyecto:

    En tu consola escribe:
   
    cd mi-repertorio

4. Instala las dependencias necesarias:
   
    En tu consola escribe:
   
    npm install

## Ejecución del Servidor

1. Para iniciar el servidor, ejecuta el siguiente comando:

en tu consola escribe:

  node index.js
  
El servidor estará disponible en http://localhost:3000.

2. Rutas Disponibles
   
El servidor ofrece las siguientes rutas para gestionar las canciones:

GET /canciones: Devuelve un JSON con todas las canciones registradas.

POST /canciones: Recibe los datos de una nueva canción y la agrega al repertorio.

PUT /canciones/:id: Recibe los datos de una canción y actualiza la canción con el id especificado.

DELETE /canciones/:id: Elimina la canción con el id especificado.

3. Uso de la Aplicación Cliente
El archivo index.html es una aplicación cliente que consume las rutas del servidor. Para usarla:

Asegúrate de que el servidor esté en funcionamiento.

Abre el archivo index.html en tu navegador.

Utiliza la interfaz para agregar, editar, eliminar y listar canciones.
