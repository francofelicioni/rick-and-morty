import React from 'react'

const FilterButton = ({ selectedItem, handleSelect, item, name, index, task, setPageNumber }) => {

    let itemId = `${name}-${index}`;



    const handleClick = () => {
        handleSelect(itemId)
        setPageNumber(1);
        task(item)
    }

    return (
        <div className='p-2'>
            <div className="flex items-center">
                <input
                    id={itemId}
                    type="radio"
                    name={name}
                    onClick={handleClick}
                    className="hidden"
                />
                <label
                    htmlFor={itemId}
                    className={`cursor-pointer hover:font-bold text-white bg-black ${selectedItem === itemId ? 'underline font-bold' : ''} rounded-lg text-sm px-2.5 py-2`}
                >
                    {item}
                </label>

            </div>
        </div>
    )
}

export default FilterButton