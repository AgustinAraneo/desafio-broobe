import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'

const Registro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleRegistro = async () => {
        try {
            const response = await axios.post(
                'https://challenge.broobe.net/api/v1/users',
                {
                    name,
                    email,
                    password,
                }
            );

            const userData = response.data[0];
            setSuccessMessage('Usuario creado con éxito');
            console.log('Información del usuario creado:', userData);

            // Puedes redirigir a otra página o mostrar un mensaje de éxito según tus necesidades.

        } catch (err) {
            console.error('Error al registrar usuario:', err.response.data);
            setError('Error al registrar usuario. Verifica tus datos.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-4 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-4">Registro de Usuario</h1>
                {successMessage && (
                    <p className="text-green-500 mb-4">{successMessage}</p>
                )}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre de Usuario:
                        </label>
                        <input
                            className="w-full border p-2 rounded-md"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email:
                        </label>
                        <input
                            className="w-full border p-2 rounded-md"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Contraseña:
                        </label>
                        <input
                            className="w-full border p-2 rounded-md"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                        type="button"
                        onClick={handleRegistro}
                    >
                        Registrar Usuario
                    </button>
                </form>
                <p className="mt-4">
                    ¿Ya tienes una cuenta? <Link href="/Login">Inicia Sesión</Link>
                </p>
            </div>
        </div>
    );
};

export default Registro;


