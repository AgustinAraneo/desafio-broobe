import React from 'react';
import Link from 'next/link';

const ButtonWhite = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className='bg-white text-pinkBroobe hover:bg-pinkBroobe hover:text-white transition-all px-2 py-2 rounded text-xl font-RedHatBold max-[768px]:text-xs'>
        {text}
      </button>
    </Link>
  );
};

export default ButtonWhite;
