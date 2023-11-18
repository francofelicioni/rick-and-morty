import React, { useState, useEffect } from 'react'
import Card from '../components/Card';

const Episodes = () => {

    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
    let {  air_date, episode } = info;
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
            <div className="row pb-2">
                <h1 className="text-center lg:text-3xl"> Episode: <span className='text-pink'> {episode === "" ? 'Unknown' : episode} </span></h1>
            </div>
            <div className="row">
                <h1 className="text-center">Air Date: {air_date === "" ? 'Unknown' : air_date}</h1>
            </div>
            <div className="flex pt-12 px-5">
                <div className='w-[40%]'> Pick episodes </div>
                <div className="w-[60%]">
                    <div className='row'> 
                    
                        <Card results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes