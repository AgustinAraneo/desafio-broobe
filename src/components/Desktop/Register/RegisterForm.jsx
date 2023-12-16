import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = ({ name, email, password, setName, setEmail, setPassword, showPassword, setShowPassword, handleRegistro }) => {
    const isLoginDisabled = !email.trim() && !password.trim() && !name.trim();

    return (
        <div className='font-RedHatMedium'>
            <h1 className="text-2xl mb-4">Registro de Usuario</h1>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombre de Usuario:</label>
                <input
                    className="w-full border p-2 rounded-md"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email:</label>
                <input
                    className="w-full border p-2 rounded-md"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4 relative">
                <label className="block text-gray-700 mb-2">Contraseña:</label>
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
                Registrarse
            </button>
        </div>
    );
};

export default RegisterForm;
