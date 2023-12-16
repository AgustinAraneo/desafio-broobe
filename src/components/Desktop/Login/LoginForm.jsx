import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-toastify';
import router from 'next/router';

const LoginForm = () => {
    const { email, setEmail, password, setPassword, handleLogin } = useAuth();
    const [showPassword, setShowPassword] = React.useState(false);

    const isLoginDisabled = !email.trim() || !password.trim();

    const handleLoginClick = async () => {
        const result = await handleLogin();

        if (result.error) {
            toast.error(result.error);
        } else {
            router.push('/Issues');
        }
    };

    return (
        <form>
            <h1 className="text-2xl font-RedHatMedium mb-4">Inicio de Sesión</h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
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
                className={`bg-pinkBroobe text-white font-RedHatMedium p-2 rounded-md focus:outline-none focus:shadow-outline-blue ${isLoginDisabled ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                type="button"
                onClick={handleLoginClick}
                disabled={isLoginDisabled}
            >
                Iniciar Sesión
            </button>
        </form>
    );
};

export default LoginForm