# Instrucciones para ejecutar el proyecto:
## Para un entorno de  desarrollo:
- Clonar el repositorio.
- Ejecutar **NPM INSTALL** para instalar todas las dependencias del backend.
- Moverse a la carpeta **"client"** y ejecutar de nuevo **NPM INSTALL**, para instalar todas las dependencias del frontend.
- Volver a la carpeta raíz y ejecutar **NPM RUN DEV**.

## Para producción:
- Clonar el repositorio.
- Ejecutar **NPM INSTALL** para instalar todas las dependencias del backend.
- Moverse a la carpeta **"client"** y ejecutar de nuevo **NPM INSTALL**, para instalar todas las dependencias del frontend.
- Ejecutar **NPM RUN BUILD**.
- Mover la carpeta build a un servidor como Apache.
- Ejecutar el backend en segundo plano usando PM2 con sus respectivas configuraciones.