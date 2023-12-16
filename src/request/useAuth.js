import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://challenge.broobe.net/api/v1/login',
                { email, password }
            );

            const { token } = response.data;
            localStorage.setItem('token', token);
            return { success: true };
        } catch (err) {
            console.error('Error al iniciar sesión:', err.response.data);
            return { error: 'Error, Verifica tus credenciales.' };
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
    };
};

export default useAuth;
