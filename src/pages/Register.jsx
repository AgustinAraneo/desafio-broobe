import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import RegisterForm from '@/components/Desktop/Register/RegisterForm';
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

        } catch (err) {
            console.error('Error al registrar usuario:', err.response.data);
            toast.error('Error al registrar usuario.');
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-grayBroobe flex-auto font-RedHatRegular">
            <div className='w-[25%] bg-purpleBroobe shadow-md flex items-center justify-center flex-col h-[50vh] rounded-l-lg'>
                <img src="/images/logo-broobe.svg" alt="Logo Broobe" className="w-40 h-40" />
                <h3 className='text-white text-lg font-RedHatBold'>Desafío Técnico - Agustín Araneo</h3>
            </div>
            <div className="w-[25%] p-4 bg-white shadow-md relative h-[50vh] rounded-r-lg">
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

export default Registro;


