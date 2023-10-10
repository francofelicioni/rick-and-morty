import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CharacterList } from '../components/CharacterList';
import Pagination from '../components/pagination/Pagination';
import Header from '../components/header/Header';
import SearchBar from '../components/Search/SearchBar';


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  // let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}/character/?name=${searchInput}`
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchInput}`


  useEffect(() => {
    (async function () {
      let data = await fetch(apiUrl).then(res => res.json())
      setFetchedData(data)
      console.log(apiUrl)
    })()
  }, [apiUrl, pageNumber])

  return (
    <>
      <div className='bg-gradient-to-r from-purple-400 to-indigo-500 h-full'>
        <Header />
        <div className='container mx-auto pt-4'>
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
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
    </>
  )
}

export default Home