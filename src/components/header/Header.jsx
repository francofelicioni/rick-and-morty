import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

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
      <div className='flex justify-center items-center py-2 dark:bg-black'>
        <h1 className="text-pink font-bold hover:text-light-salmon text-3xl lg:text-5xl">  RICK  <span className='text-green'>&</span> MORTY <span className='text-yellow'>WIKI</span></h1>

        <div className='absolute right-0 p-5 flex items-center' onClick={handleClick}>
          {theme === 'dark' ? (
            <>
              <button className='w-10 h-10 text-white' >
                <MdOutlineDarkMode />
              </button>
              <span className='text-white'>Light</span>
            </>
          ) : (
            <>
              <button className='w-10 h-10 text-white' >
                <MdDarkMode />
              </button>
              <span className='text-white'>Dark</span>
            </>
          )}
        </div>
      </div>
    </>

  )
}

export default Header