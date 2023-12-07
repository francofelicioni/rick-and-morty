import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const SearchBar = ({searchInput, setSearchInput}) => {

    return (
        <form className='flex justify-between gap-2 w-full px-5 mx-auto'>
            <input onKeyUp={e => setSearchInput(e.target.value) } className="w-full text-xl pl-2 h-12 rounded-lg mx-auto shadow-lg dark:border-black" placeholder='Entrer a character name' autoFocus type="text" />
            <button onClick={e => e.preventDefault()} className='bg-red-300 text-white border-black dark:text-black uppercase cursor-pointer font-bold rounded-lg border border-1 dark:border-black w-36 shadow-lg'>Search</button>
        </form>
    )
}

export default SearchBar