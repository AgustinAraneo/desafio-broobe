import React from 'react';
import Link from 'next/link';

const ButtonPurple = ({ href, text }) => {
    return (
        <Link href={href}>
            <button className='bg-purpleBroobe text-white hover:bg-[#3b399c] transition-all px-2 py-2 rounded text-xl font-RedHatBold max-[768px]:text-xs'>
                {text}
            </button>
        </Link>
    );
};

export default ButtonPurple;
