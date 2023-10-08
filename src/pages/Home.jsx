import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CharacterList } from '../components/CharacterList';
import Pagination from '../components/pagination/Pagination';
import Header from '../components/header/Header';


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() => {
    (async function () {
      let data = await fetch(apiUrl).then(res => res.json())
      setFetchedData(data)
      console.log(pageNumber, apiUrl)
    })()
  }, [apiUrl, pageNumber])

  return (
    <>
      <div className='bg-gradient-to-r from-purple-400 to-indigo-500'>
        <Header />
        <div className='container mx-auto'>
          <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
          <CharacterList characters={results} />
          <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>
      </div>
    </>
  )
}

export default Home