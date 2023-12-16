import React from 'react';

const Introduccion = () => {
    return (
        <div className="max-w-3xl mx-auto py-8 text-white">
            <h1 className="text-4xl font-RedHatBold mb-6">Introducción al Proyecto</h1>
            <p>
                Este proyecto fue desarrollado como parte de un desafío técnico para la empresa <span className="text-pinkBroobe font-RedHatBold">Broobe</span>.
                <span className="block mt-2">
                    <span className="font-RedHatBold">Breve descripción:</span> ¿Cuáles fueron los objetivos o requisitos del desafío?
                </span>
            </p>
            <h2 className="text-2xl font-RedHatBold mt-6">Tecnologías Utilizadas 💻</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>
                    <strong>Next.js:</strong> Se eligió Next.js para este proyecto con la premisa de utilizar Client-Side Rendering (CSR). La decisión de seguir esta ruta se basó en la necesidad de forzar a Next.js a realizar el procesamiento desde el lado del cliente, proporcionando una experiencia más dinámica y optimizada para ciertos componentes.
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
                    {/* Añade más detalles según tus preferencias */}
                </li>
                {/* [Agrega otras tecnologías utilizadas en tu proyecto] */}
            </ul>
            <h2 className="text-2xl font-RedHatBold mt-6">Dependencias y Configuración 📖</h2>
            <p>
                Para ejecutar este proyecto, sigue estos pasos:
            </p>
            <pre className="bg-gray-800 text-white p-2 mt-2 rounded">
                <code className="text-sm">$ yarn</code>
            </pre>
            <p className="mt-2">
                Se ejecuta el comando "yarn" para realizar la descarga de las dependencias del proyecto.
            </p>

            <h2 className="text-2xl font-RedHatBold mt-6">Despliegue 🚀</h2>
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

            <h2 className="text-2xl font-RedHatBold mt-6">Librerías Adicionales Utilizadas</h2>
            <p>
                Aunque no estaban inicialmente planeadas, se incorporaron las siguientes librerías para mejorar la experiencia de usuario:
            </p>
            <ul className="list-disc pl-6 mt-2">
                <li>
                    <strong>aos:</strong> Utilizado para agregar animaciones al front-end.
                </li>
                <li>
                    <strong>react-icons:</strong> Empleado para integrar iconos y mejorar la interfaz de usuario.
                </li>
                <li>
                    <strong>@material-ui/core:</strong> Utilizado para el hook que detecta el tamaño de la pantalla y facilita el cambio entre vistas móviles y de escritorio.
                </li>
            </ul>

            <h2 className="text-2xl font-RedHatBold mt-6">Autor 😎</h2>
            <p>
                Desarrollado por: <a href="https://github.com/AgustinAraneo" target="_blank" rel="noopener noreferrer" className="text-pinkBroobe underline font-RedHatMedium">@AgustinAraneo</a>
            </p>
        </div>
    );
};

export default Introduccion;
