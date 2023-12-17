import React from 'react';
import Link from 'next/link'

const NotLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-grayBroobe font-RedHatRegular">
            <div className="bg-purpleBroobe p-14 rounded-md shadow-md text-center text-white">
                <h1 className="text-2xl font-semibold mb-4 underline underline-offset-4">Acceso Restringido</h1>
                <p className="mb-8">Debes iniciar sesión para poder acceder a esta página.</p>
                <Link href="/Login" className="bg-pinkBroobe text-white p-2 rounded-md hover:bg-pink-700 transition-all">
                    Iniciar Sesión
                </Link>
                <p className="mt-8">¿No tienes una cuenta? <Link href="/Register" className="text-pinkBroobe">Regístrate aquí</Link>.</p>
            </div>
        </div>
    );
}

export default NotLogin;
