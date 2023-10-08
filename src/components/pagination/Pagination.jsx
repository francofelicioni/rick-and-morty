import React from 'react'

const Pagination = ({ setPageNumber, pageNumber }) => {

    const prev = () => {
        if (pageNumber === 1) return
        setPageNumber(pageNumber - 1)
    }
    const next = () => {
        if (pageNumber === 42) return
        setPageNumber(pageNumber + 1)
    }

    return (
        <div className='flex justify-between p-4'>
            <button onClick={prev} className='text-white font-bold uppercase border border-black bg-cyan-300 rounded-lg py-1 px-2'> Prev </button>
            <button onClick={next} className='text-white font-bold uppercase border border-black bg-cyan-300 rounded-lg py-1 px-2'> Next </button>
        </div>
    )
}

export default Pagination