import Link from 'next/link';
import React from 'react';
import NavLinks from './navlinks/NavLinks';
import Image from 'next/image';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Navbar = () => {
  return (
    <div className='md:p-6 pb-6'>
      <div className='flex items-center justify-between p-4 bg-white md:rounded-lg'>
        <Link href='/' className="flex items-center space-x-2">
          <span className="relative w-8 h-8">
            <Image 
              src="/images/solar_link-circle-bold.png" 
              alt="devlinks Logo" 
              layout="fill" 
              objectFit="contain" 
            />
          </span>
          <span className="hidden md:block text-[#333] text-2xl font-bold flex items-center">
            devlinks
          </span>
        </Link>
        <NavLinks />
        <Link href='/preview' className='hidden md:block bg-white rounded-lg text-[#633CFF] py-[11px] px-[27px] border border-[#633CFF] hover:bg-[#EFEBFF] hover:cursor-pointer'>
          Preview
        </Link>
        <Link href='/preview' className='block md:hidden bg-white rounded-lg text-[#633CFF] py-[11px] px-[16px] md:px-[27px] border border-[#633CFF] hover:bg-[#EFEBFF] hover:cursor-pointer'>
          <VisibilityOutlinedIcon/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
