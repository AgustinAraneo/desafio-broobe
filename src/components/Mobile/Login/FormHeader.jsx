import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";

const FormHeader = () => (
    <Link href={"/"}>
        <div className='absolute top-4 left-4 flex-auto flex items-center text-purpleBroobe text-xl font-RedHatMedium'>
            <FaArrowLeft />
            <p className='pl-2'>Volver</p>
        </div>
    </Link>
);

export default FormHeader;
