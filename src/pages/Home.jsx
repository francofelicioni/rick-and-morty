import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { CharacterList } from '../components/CharacterList';
import Pagination from '../components/pagination/Pagination';
import Header from '../components/header/Header';
import SearchBar from '../components/Search/SearchBar';
import Filters from '../components/Filters/Filters';


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchInput, setSearchInput] = useState('');

  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [status, setStatus] = useState('')

  const [fetchedData, setFetchedData] = useState([]);

  let { info, results } = fetchedData;
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchInput}&status=${status}&gender=${gender}&species=${species}`


  useEffect(() => {
    (async function () {
      let data = await fetch(apiUrl).then(res => res.json())
      setFetchedData(data)
    })()
  }, [apiUrl, pageNumber])

  return (
    <>
      <div className='bg-gradient-to-r from-indigo-500 dark:from-indigo-900  to-purplepink-500 dark:to-slate-800 h-full'>
        <div className='container mx-auto pt-4'>
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
          <div className='flex justify-between px-5'>
            <div class="w-60">
              <Filters setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} setPageNumber={setPageNumber} />
            </div>
            <div class="w-full">
              {
                (results)
                  ? <CharacterList characters={results} />

                  :
                  <div className='flex flex-col justify-center items-center'>
                    <p className='flex justify-center p-8 text-xxl font-bold'>No characters found! Please try again.</p>
                    <img src="images/not-found.png" alt="" />
                  </div>
              }
              <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home