import React, { useState, useEffect } from 'react'
import CardList from '../components/Cards/CardList';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {

    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
    let {  air_date, episode, name } = info;
    let apiUrl = `https://rickandmortyapi.com/api/episode/${id}`;


    useEffect(() => {
        (async function () {
            let data = await fetch(apiUrl).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.characters.map(async (x) => {
                    const res = await fetch(x);
                    return await res.json();
                })
            );
            setResults(a);
        })()
    }, [apiUrl])

    return (
        <div className='container mx-auto pt-4 dark:bg-black`'>
            <div className="flex flex-col justify-center items-center pb-2">
                <h1 className="text-center lg:text-3xl"> Episode: <span className='text-pink'> {name === "" ? 'Unknown' : name} </span></h1>
                <p className='text-xs'>{episode}</p>
            </div>
            <div className="row">
                <h1 className="text-center">Air Date: {air_date === "" ? 'Unknown' : air_date}</h1>
            </div>
            <div className="flex justify-between pt-12 px-5 lg:px-0">
                <div className='w-60 flex flex-col items-center'> 
                    <h4 className=' font-bold'>Pick episodes </h4>
                    <div>
                        <InputGroup name="Episode" total={51} setId={setId}/> 
                    </div>
                </div>

                <div className="w-full">
                    <div className='row'> 
                        <CardList results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes