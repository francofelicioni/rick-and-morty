import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-x-4 dark:bg-black dark:text-white py-2'>
            <Link className='cursor-pointer active:underline' to="/">Characters</Link>
            <span>•</span>
            <Link className='cursor-pointer active:underline' to="/episodes">Episodes</Link>
            <span>•</span>
            <Link className='cursor-pointer  active:underline' to="/locations">Locations</Link>
        </div>
    )
}

export default Navbar 


