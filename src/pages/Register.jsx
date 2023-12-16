import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
            toast.success('Usuario creado con éxito');
            console.log('Información del usuario creado:', userData);

            // Puedes redirigir a otra página o mostrar un mensaje de éxito según tus necesidades.

        } catch (err) {
            console.error('Error al registrar usuario:', err.response.data);
            toast.error('Error al registrar usuario.');
        }
    };

    const isLoginDisabled = !email.trim() && !password.trim() && !name.trim();

    return (
        <div className="min-h-screen flex items-center justify-center bg-grayBroobe flex-auto font-RedHatRegular">
            <div className='w-[25%] bg-purpleBroobe shadow-md flex items-center justify-center flex-col h-[50vh] rounded-l-lg'>
                <img src="/images/logo-broobe.svg" alt="Logo Broobe" className="w-40 h-40" />
                <h3 className='text-white text-lg font-RedHatBold'>Desafío Técnico - Agustín Araneo</h3>
            </div>
            <div className="w-[25%] p-4 bg-white shadow-md relative h-[50vh] rounded-r-lg">
                <form>
                    <h1 className="text-2xl font-RedHatMedium mb-4">Registro de Usuario</h1>
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

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 font-bold mb-2">
                            Contraseña:
                        </label>
                        <input
                            className="w-full border p-2 rounded-md"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type='button'
                            className="absolute top-2 right-2"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button
                        className={`bg-pinkBroobe text-white font-RedHatMedium p-2 rounded-md focus:outline-none focus:shadow-outline-blue ${isLoginDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="button"
                        onClick={handleRegistro}
                        disabled={isLoginDisabled}
                    >
                        Registrar Usuario
                    </button>
                </form>
                <p className="absolute bottom-4">
                    ¿Ya tienes una cuenta? <Link href="/Login" className='text-pinkBroobe hover:text-pink-700 transition-all font-RedHatMedium'>Inicia Sesión</Link>
                </p>
            </div>
            <ToastContainer
                draggablePercent={60}
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Registro;


