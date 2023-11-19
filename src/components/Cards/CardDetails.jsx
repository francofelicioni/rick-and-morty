import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CardDetails = () => {

    let { id } = useParams();
    let apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(apiUrl).then(res => res.json());
            setFetchedData(data);
        })()
    }, [apiUrl])

    const [fetchedData, setFetchedData] = useState([]);
    let { name, status, species, gender, origin, type, location, image } = fetchedData;


    return (
        <div className='flex flex-col justify-center items-center max-w-[300px] mx-auto m-5 bg-red-200 rounded-lg' >
            <div className='py-4 text-center'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <span>{species}</span>
            </div>

            <img className='rounded-lg' src={image} alt={name} />

            <div className={`w-full text-white font-bold text-center py-4 ${status === 'Alive' ? 'bg-alive' : status === 'Dead' ? 'bg-dead' : 'bg-unknown'}`}>
                {status}
            </div>

            <div className='flex flex-col py-4 w-full'>
                <div className='flex gap-2'>
                    <p className='font-bold'>Gender:</p>
                    <p>{gender}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold tex-md'>First seen on:</p>
                    <p className='text-md'>{origin?.name}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold text-md'>Last seen on:</p>
                    <p className='text-md'>{location?.name}</p>
                </div>
                
            </div>
        </div>
    )
}

export default CardDetails