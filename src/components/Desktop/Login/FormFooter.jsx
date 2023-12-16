import React from 'react';
import Link from 'next/link';

const FormFooter = () => (
    <p className="absolute bottom-4">
        ¿No tienes una cuenta? <Link href="/Register" className='text-pinkBroobe hover:text-pink-700 transition-all font-RedHatMedium'>Regístrate</Link>
    </p>
);

export default FormFooter;
