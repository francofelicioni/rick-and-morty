import React from 'react'

const FilterButton = () => {
    return (
        <div className='p-2'>
            <div className="flex items-center">
                <input
                    checked
                    id="default-radio-1"
                    type="radio"
                    name="default-radio"
                    className="mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label 
                    for="default-radio-1" 
                    className="text-white bg-black hover:underline font-medium rounded-lg text-sm px-2.5 py-2"
                >
                    Default radio
                </label>
                
            </div>
            <div className="flex items-center">
                <input
                    id="default-radio-2"
                    type="radio"
                    name="default-radio"
                    className="mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label 
                    for="default-radio-2"
                    className="text-white bg-black hover:underline font-medium rounded-lg text-sm px-2.5 py-2"
                >
                    Checked state
                </label>
            </div>
        </div>
    )
}

export default FilterButton