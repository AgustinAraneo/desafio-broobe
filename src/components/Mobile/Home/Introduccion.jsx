import React from 'react';
import ButtonWhite from '@/components/Desktop/Ui/ButtonWhite';

const Introduccion = () => {
    return (
        <div className="mx-auto py-8 text-white text-sm w-[90%]">
            <div className='flex flex-auto justify-between'>
                <h1 className="text-2xl font-RedHatBold mb-4 underline underline-offset-4">Introducción al Proyecto</h1>
            </div>
            <div className='flex justify-center mb-4'>
                <ButtonWhite href="/Login" text="¡Ver Proyecto!" />
            </div>
            <p>
                Este proyecto fue desarrollado como parte de un desafío técnico para la empresa <span className="text-pinkBroobe font-RedHatBold">Broobe</span>.
                <span className="block mt-2 ">
                    <br />
                    <span className="font-RedHatBold">Breve descripción:</span> ¿Cuáles fueron los objetivos o requisitos del desafío?
                </span>
                <br />
            </p>
            <p>
                Este proyecto fue desarrollado como respuesta a un desafío técnico propuesto por la empresa <span className="text-pinkBroobe font-RedHatBold">Broobe</span>. El objetivo principal del desafío era construir una aplicación de React que interactuara con una RESTFUL API proporcionada por la empresa. Algunos de los puntos clave abordados en la aplicación incluyen:
            </p>
            <ul className="list-disc pl-6 mt-2">
                <li>
                    <span className='font-RedHatBold'>Pantalla de Login:</span> Implementación de una pantalla pública con un formulario para iniciar sesión, que utiliza el endpoint de autenticación Bearer Token.
                </li>
                <li>
                    <span className='font-RedHatBold'>Registro de Usuario:</span> Creación de una pantalla pública con un formulario para registrar nuevos usuarios mediante el endpoint correspondiente.
                </li>
                <li>
                    <span className='font-RedHatBold'>Listar Issues:</span> Desarrollo de una pantalla que permite a los usuarios autenticados ver todas las issues en un listado, utilizando el endpoint respectivo.
                </li>
                <li>
                    <span className='font-RedHatBold'>Crear un Issue:</span> Implementación de una pantalla para que los usuarios autenticados puedan cargar nuevas issues mediante un formulario.
                </li>
                <li>
                    <span className='font-RedHatBold'>Actualizar un Issue:</span> Creación de una pantalla para que los usuarios autenticados puedan editar una issue, cambiando su prioridad.
                </li>
                <li>
                    <span className='font-RedHatBold'>Interacción para borrar Issues:</span> Agregado de una interacción en la pantalla de listado de issues para que los usuarios puedan eliminar issues con confirmación.
                </li>
            </ul>
            <h2 className="text-xl font-RedHatBold mt-6">Características Adicionales ✨</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>
                    <strong>Clean Code con SOLID:</strong> Se aplicaron principios SOLID para mejorar la estructura y mantenibilidad del código, promoviendo prácticas de desarrollo limpio.
                </li>
                <li>
                    <strong>Responsive Design:</strong> El proyecto es completamente responsive, lo que significa que se puede acceder desde dispositivos móviles y computadoras de escritorio sin comprometer la experiencia del usuario.
                </li>
                <li>
                    <strong>Hosteado en Vercel:</strong> La aplicación está hosteada en Vercel y se puede acceder en línea desde la siguiente URL: <a href="https://desafio-broobe.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-pinkBroobe underline font-RedHatMedium">https://desafio-broobe.vercel.app/</a>
                </li>
                <li>
                    <strong>Validación de URLs:</strong> Se implementó una validación en las URLs para garantizar que solo se pueda acceder a las rutas privadas con el token de inicio de sesión.
                </li>
                <li>
                    <strong>Comunicación entre Páginas:</strong> Todo el código se diseñó para mantener una interacción constante entre las páginas, asegurando una experiencia de usuario fluida y coherente en toda la aplicación.
                </li>
            </ul>
            <h2 className="text-xl font-RedHatBold mt-6">Tecnologías Adicionales Utilizadas 💻</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>
                    <strong>Next.js:</strong> Se eligió Next.js para este proyecto con la premisa de utilizar Client-Side Rendering (CSR). La decisión de seguir esta ruta se basó en la necesidad de forzar a Next.js a realizar el procesamiento desde el lado del cliente, proporcionando una experiencia más dinámica y optimizada para ciertos componentes (Se uso 'use client' en los componentes para que se renderice utilizando el CSR).
                    Ademas se opto por este framework por estos pros:
                    <ul className="list-disc pl-6 mt-2">
                        <li>
                            <span className='font-RedHatBold'>Facilidad de enrutamiento:</span> Next.js proporciona un sistema de enrutamiento intuitivo que facilita la navegación entre páginas y componentes.
                        </li>
                        <li>
                            <span className='font-RedHatBold'>Framework React:</span> Next.js extiende las capacidades de React y simplifica la configuración, permitiendo un desarrollo más eficiente.
                        </li>
                    </ul>
                    <br />
                </li>
                <li>
                    <strong>Tailwind.css:</strong> Opté por Tailwind CSS por su enfoque utilitario y su capacidad para acelerar el desarrollo mediante estilos predefinidos. La configuración sencilla y la flexibilidad para personalizar estilos hacen que sea una elección eficiente.
                </li>
            </ul>
            <h2 className="text-xl font-RedHatBold mt-6">Librerías Adicionales Utilizadas</h2>
            <p>
                Aunque no estaban inicialmente planeadas, se incorporaron las siguientes librerías para mejorar la experiencia de usuario:
            </p>
            <ul className="list-disc pl-6 mt-2">
                <li>
                    <strong>axios:</strong> Utilizado para realizar las peticiones a los Endpoints.
                </li>
                <li>
                    <strong>react-icons:</strong> Empleado para integrar iconos y mejorar la interfaz de usuario.
                </li>
                <li>
                    <strong>react-toastify:</strong> Utilizado para el manejo de notificaciones en los apartados de Login, Register, Create Issue y Update Issue.
                </li>
                <li>
                    <strong>framer-motion:</strong> Utilizado para realizar la animación del modal de Delete Issue.
                </li>
            </ul>
            <h2 className="text-xl font-RedHatBold mt-6">Dependencias y Configuración 📖</h2>
            <p>
                Para ejecutar este proyecto, sigue estos pasos:
            </p>
            <pre className="bg-gray-800 text-white p-2 mt-2 rounded">
                <code className="text-sm">$ yarn</code>
            </pre>
            <p className="mt-2">
                Se ejecuta el comando "yarn" para realizar la descarga de las dependencias del proyecto.
            </p>

            <h2 className="text-xl font-RedHatBold mt-6">Despliegue 🚀</h2>
            <p>
                Sigue estos pasos para desplegar la aplicación:
            </p>
            <pre className="bg-gray-800 text-white p-2 mt-2 rounded">
                <code className="text-sm">$ yarn dev</code>
            </pre>
            <p className="mt-2">
                Se ejecuta el comando "yarn dev" para levantar el proyecto de forma local. <br />
                Puedes visitar la aplicación abriendo tu navegador y accediendo a: <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-pinkBroobe underline font-RedHatMedium">http://localhost:3000</a>
            </p>
            <h2 className="text-xl font-RedHatBold mt-6">Autor 😎</h2>
            <p>
                Desarrollado por: <a href="https://github.com/AgustinAraneo" target="_blank" rel="noopener noreferrer" className="text-pinkBroobe underline font-RedHatMedium">@AgustinAraneo</a>
            </p>
        </div>
    );
};

export default Introduccion;
