# Introducción al Proyecto

Este proyecto fue desarrollado como parte de un desafío técnico para la empresa Broobe.

**Breve descripción:** ¿Cuáles fueron los objetivos o requisitos del desafío?

Este proyecto fue desarrollado como respuesta a un desafío técnico propuesto por la empresa Broobe. El objetivo principal del desafío era construir una aplicación de React que interactuara con una RESTFUL API proporcionada por la empresa. Algunos de los puntos clave abordados en la aplicación incluyen:

- **Pantalla de Login:** Implementación de una pantalla pública con un formulario para iniciar sesión, que utiliza el endpoint de autenticación Bearer Token.
- **Registro de Usuario:** Creación de una pantalla pública con un formulario para registrar nuevos usuarios mediante el endpoint correspondiente.
- **Listar Issues:** Desarrollo de una pantalla que permite a los usuarios autenticados ver todas las issues en un listado, utilizando el endpoint respectivo.
- **Crear un Issue:** Implementación de una pantalla para que los usuarios autenticados puedan cargar nuevas issues mediante un formulario.
- **Actualizar un Issue:** Creación de una pantalla para que los usuarios autenticados puedan editar una issue, cambiando su prioridad.
- **Interacción para borrar Issues:** Agregado de una interacción en la pantalla de listado de issues para que los usuarios puedan eliminar issues con confirmación.

## Características Adicionales ✨

- **Clean Code con SOLID:** Se aplicaron principios SOLID para mejorar la estructura y mantenibilidad del código, promoviendo prácticas de desarrollo limpio.
- **Responsive Design:** El proyecto es completamente responsive, lo que significa que se puede acceder desde dispositivos móviles y computadoras de escritorio sin comprometer la experiencia del usuario.
- **Hosteado en Vercel:** La aplicación está hosteada en Vercel y se puede acceder en línea desde la siguiente URL: [https://desafio-broobe.vercel.app/](https://desafio-broobe.vercel.app/)
- **Validación de URLs:** Se implementó una validación en las URLs para garantizar que solo se pueda acceder a las rutas privadas con el token de inicio de sesión.
- **Comunicación entre Páginas:** Todo el código se diseñó para mantener una interacción constante entre las páginas, asegurando una experiencia de usuario fluida y coherente en toda la aplicación.

## Tecnologías Adicionales Utilizadas 💻

- **Next.js:** Se eligió Next.js para este proyecto con la premisa de utilizar Client-Side Rendering (CSR). La decisión de seguir esta ruta se basó en la necesidad de forzar a Next.js a realizar el procesamiento desde el lado del cliente, proporcionando una experiencia más dinámica y optimizada para ciertos componentes. Además, se optó por este framework por su facilidad de enrutamiento y su extensión de las capacidades de React.
- **Tailwind.css:** Opté por Tailwind CSS por su enfoque utilitario y su capacidad para acelerar el desarrollo mediante estilos predefinidos. La configuración sencilla y la flexibilidad para personalizar estilos hacen que sea una elección eficiente.

## Librerías Adicionales Utilizadas

Aunque no estaban inicialmente planeadas, se incorporaron las siguientes librerías para mejorar la experiencia de usuario:

- **axios:** Utilizado para realizar las peticiones a los Endpoints.
- **react-icons:** Empleado para integrar iconos y mejorar la interfaz de usuario.
- **react-toastify:** Utilizado para el manejo de notificaciones en los apartados de Login, Register, Create Issue y Update Issue.
- **framer-motion:** Utilizado para realizar la animación del modal de Delete Issue.

## Dependencias y Configuración 📖

Para ejecutar este proyecto, sigue estos pasos:

```bash
  $ yarn
```

Se ejecuta el comando "yarn" para realizar la descarga de las dependencias del proyecto.

## Despliegue 🚀
Sigue estos pasos para desplegar la aplicación:

```bash
  $ yarn dev
```

Se ejecuta el comando "yarn dev" para levantar el proyecto de forma local.
Puedes visitar la aplicación abriendo tu navegador y accediendo a: http://localhost:3000


## Autor 😎

- [@AgustinAraneo](https://www.github.com/AgustinAraneo)

