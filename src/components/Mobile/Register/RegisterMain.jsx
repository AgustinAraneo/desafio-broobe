import React, { useState } from 'react';
import Link from 'next/link'
import RegisterForm from '@/components/Desktop/Register/RegisterForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from '@/request/Register';

const RegisterMain = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const registerInstance = new Register();

    const handleRegistro = async () => {
        try {
            const userData = await registerInstance.registerUser(name, email, password);

            toast.success('Usuario creado con éxito');
            console.log('Información del usuario creado:', userData);
        } catch (err) {
            console.error('Error al registrar usuario:', err);
            toast.error('Error al registrar usuario.');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-grayBroobe flex-auto font-RedHatRegular">
            <div className="w-[90%] mx-auto p-4 bg-white shadow-md relative py-20 rounded-r-lg">
                <RegisterForm
                    name={name}
                    email={email}
                    password={password}
                    setName={setName}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    handleRegistro={handleRegistro}
                />
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

export default RegisterMain;


