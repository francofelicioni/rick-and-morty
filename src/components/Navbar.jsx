import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-x-4 bg-yellow dark:bg-slate-800 dark:text-white py-3'>
            <Link className='cursor-pointer font-semibold active:underline' to="/">Characters</Link>
            <span>•</span>
            <Link className='cursor-pointer font-semibold active:underline' to="/episodes">Episodes</Link>
            <span>•</span>
            <Link className='cursor-pointer font-semibold  active:underline' to="/locations">Locations</Link>
        </div>
    )
}

export default Navbar 


