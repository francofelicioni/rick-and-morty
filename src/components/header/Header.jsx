import React, { useEffect, useState } from 'react'

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
      <h1 className="text-pink font-bold hover:text-light-salmon transition ease-in-out delay-150 text-3xl lg:text-5xl font bold text-center py-2 bg-black py-4">  RICK  <span className='text-green'>&</span> MORTY <span className='text-yellow'>WIKI</span>
      </h1>
      <button className='text-black' onClick={handleClick}>
        Change Theme
      </button>
    </>

  )
}

export default Header