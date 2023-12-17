import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/Login');
    };

    return (
        <div className="flex justify-between items-center px-10 max-[768px]:px-4 bg-purpleBroobe font-RedHatBold ">
            <div className='flex flex-col items-center'>
                <img
                    src="/images/logo-broobe.svg"
                    alt="Logo Broobe"
                    className="w-40 h-16 max-[768px]:w-20 max-[768px]:h-10"
                />
                <h3 className='text-white text-lg mb-2 max-[768px]:text-[10px]'>Desafío Técnico - Agustín Araneo</h3>
            </div>
            <div className="flex items-center">
                <div className='flex flex-auto items-center text-white cursor-pointer max-[768px]:text-xs' onClick={handleLogout}>
                    <p>
                        Cerrar Sesión
                    </p>
                    <p>
                        <FaSignOutAlt className="ml-2" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
