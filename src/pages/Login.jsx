import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Obtén el objeto router utilizando useRouter
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://challenge.broobe.net/api/v1/login',
                {
                    email,
                    password,
                }
            );

            const { token } = response.data;
            // Guarda el token en localStorage o en el estado según tus necesidades.
            localStorage.setItem('token', token);

            // Redirige al usuario a la página de "Issues"
            router.push('/Issues');

        } catch (err) {
            // Manejo de errores
            console.error('Error al iniciar sesión:', err.response.data);
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-4 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-4">Inicio de Sesión</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form>
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
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </button>
                </form>

                <p className="mt-4">
                    ¿No tienes una cuenta? <Link href="/Register" className='text-blue-500'>Regístrate</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
