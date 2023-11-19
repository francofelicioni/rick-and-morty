import React, { useState, useEffect } from 'react'
import CardList from '../components/Cards/CardList';
import InputGroup from '../components/Filters/Category/InputGroup';

const Locations = () => {

    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const [results, setResults] = useState([]);
    let {  type, dimension, name } = info;
    let apiUrl = `https://rickandmortyapi.com/api/location/${id}`;


    useEffect(() => {
        (async function () {
            let data = await fetch(apiUrl).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.residents.map(async (x) => {
                    const res = await fetch(x);
                    return await res.json();
                })
            );
            setResults(a);
        })()
    }, [apiUrl])

    return (
        <div className='container mx-auto pt-4 dark:bg-black`'>
            <div className="flex flex-col justify-center items-center pb-2 mt-4">
                <h1 className='text-3xl text-center'>Location: {name}</h1>
            </div>
            <div className="flex items-center justify-center gap-4">
                <h1 className="text-center">Type: <span className='text-pink'>{type === "" ? 'Unknown' : type}</span></h1>
                <span>-</span>
                <p className="lg:text-md"> Dimension: <span className='text-pink'> {dimension === "" ? 'Unknown' : dimension} </span></p>
            </div>
            <div className="flex justify-between pt-12 px-5 lg:px-0">
                <div className='w-60 flex flex-col items-center'> 
                    <h4 className=' font-bold'>Pick locations </h4>
                    <div>
                        <InputGroup name="Location" total={126} setId={setId}/> 
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

export default Locations