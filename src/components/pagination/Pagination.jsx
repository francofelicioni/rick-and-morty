import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, setPageNumber, pageNumber }) => {

    return (
        <div className='flex w-full justify-between p-4'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                nextClassName="border border rounded-lg py-1 px-2 w-20 bg-blue-400 text-white text-center"
                previousLabel="Previous"
                previousClassName="border border rounded-lg py-1 px-2 w-20 bg-blue-400 text-white text-center"
                onPageChange={(data)=> {setPageNumber(data.selected +1)}}
                pageRangeDisplayed={1}
                pageCount={info?.pages}
                forcePage={pageNumber === 1 ? 0 : pageNumber -1}
                className='flex font-bold justify-between items-center w-full lg:w-[100%] mx-auto'
                activeClassName='font-bold border w-6 h-6 text-center p-2.5 flex justify-center items-center rounded-full text-white'
            />
        </div>
    )
}

export default Pagination