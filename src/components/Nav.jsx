import React, { useContext, useState, useEffect } from 'react';
import Logo from '../assets/undraw_logo.svg';
import { HiMagnifyingGlass, HiMoon, HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../jsx files/Context';

function Nav() {
  const { getTheme, setTheme } = useContext(ThemeContext);

  // Load the theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
        setTheme('dark')
    }
  }, [setTheme]);

  // Helper to toggle dark
  const toggleDarkMode = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save the theme to local storage
      return newTheme;
    });
  };

  return (
    <div className={`navContainer flex items-center px-5 py-5 ${getTheme}`}>
      <img src={Logo} width={60} height={60} alt="Logo" />
      <div className='search flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <HiMagnifyingGlass className='text-black' />
        <input type='text' placeholder='Search A Game' className='bg-transparent w-full outline-none px-2' />
      </div>
      <div>
        {getTheme === 'light' ? (
          <HiMoon
            className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
            onClick={toggleDarkMode}
          />
        ) : (
          <HiSun
            className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default Nav;
