import React from 'react'

const FilterButton = ({ selectedItem, handleSelect, item, name, index }) => {

    let itemId = `${name}-${index}`;

    return (
        <div className='p-2'>
            <div className="flex items-center">
                <input
                    id={itemId}
                    type="radio"
                    name={name}
                    onChange={() => handleSelect(itemId)}
                    className="mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 checked:bg-red-500 dark:border-gray-600"
                />
                <label
                    htmlFor={itemId}
                    className={`text-white bg-black hover:underline ${selectedItem === itemId ? 'underline' : ''} font-medium rounded-lg text-sm px-2.5 py-2`}
                >
                    {item}
                </label>

            </div>
        </div>
    )
}

export default FilterButton