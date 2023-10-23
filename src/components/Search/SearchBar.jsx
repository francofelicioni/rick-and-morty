import React from 'react'

const SearchBar = ({searchInput, setSearchInput}) => {

    return (
        <form className='flex justify-between gap-2 w-full px-6 mx-auto'>
            <input onKeyUp={e => setSearchInput(e.target.value) } className="w-full text-xl pl-2 h-12 rounded-lg mx-auto shadow-lg" placeholder='Entrer a character name' autoFocus type="text" />
            <button onClick={e => e.preventDefault()} className='bg-yellow text-unknown uppercase cursor-pointer font-bold rounded-lg border border-1 w-36 shadow-lg'>Search</button>
        </form>
    )
}

export default SearchBar