import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='h-10  w-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md'>
<p className='blue-gradient_text'>FM</p>
      </NavLink>
      <nav className='flex gap-7 font-medium text-lg'>
          <NavLink to={'/about'}
          className={({isActive})=>isActive? 'text-blue-500':'text-black'}
          >
about
          </NavLink>
          <NavLink to={'/projects'}
          className={({isActive})=>isActive? 'text-blue-500':'text-black'}
          >
projects
          </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
