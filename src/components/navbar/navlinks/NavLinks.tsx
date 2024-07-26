import React from 'react';
import LinkItem from './linkitem/LinkItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';


const navlinks = [
  {
    title: 'Links',
    path: '/links',
    // img: '/images/ph_link-bold.png'
    img: <LinkOutlinedIcon style={{ transform: 'rotate(-35deg)' }} />
  },
  {
    title: 'Profile Details',
    path: '/profile',
    img: <AccountCircleOutlinedIcon/>
    // img: '/images/ph_user-circle-bold.png'
  },
];

const NavLinks = () => {
  return (
    <div className='flex items-center justify-between md:gap-10 text-gray-900'>
      {navlinks.map((link) => (
        <LinkItem item={link} key={link.title} />
      ))}
    </div>
  );
};

export default NavLinks;
