import React, { useEffect, useState } from 'react'

import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {

  const [theme, setTheme] = useState(() => {

    let savedTheme = localStorage.getItem('savedTheme')

    if (savedTheme !== null) {
      return savedTheme;

    } else {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        return 'dark';
      } else {
        return 'light';
      }
    }
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
      localStorage.setItem('savedTheme', 'dark')
    } else {
      document.querySelector('html').classList.remove('dark')
      localStorage.setItem('savedTheme', 'light')
    }
  }, [theme])


  const handleClick = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }


  return (
    <>
      <div className='flex justify-center items-center py-2 bg-light-salmon dark:bg-black'>
        <Link to='/'>
          <h1 className="text-brown dark:text-pink font-bold hover:text-black hover:dark:text-light-salmon text-3xl lg:text-5xl transition easy-in duration-500">  RICK  <span className='text-white dark:text-green'>&</span> MORTY <span className='text-yellow'>WIKI</span></h1>
        </Link>

        <div className='absolute right-0 p-5 flex items-center' onClick={handleClick}>
          {theme === 'dark' ? (
            <>
              <button className='flex items-center gap-2 text-white' >
                <MdOutlineDarkMode />
                <span className='text-black dark:text-white font-semibold'>Light</span>
              </button>
            </>
          ) : (
            <>
              <button className='flex items-center gap-2 text-black' >
                <MdDarkMode />
                <span className='text-black dark:text-white font-semibold'>Dark</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>

  )
}

export default Header