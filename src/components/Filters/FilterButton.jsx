import React from 'react'

const FilterButton = ({ selectedItems, setSelectedItems, item, name, index, task, setPageNumber }) => {

    let itemId = `${name}-${index}`;

    const isSelected = (selectedItems[name]).toLowerCase() === item.toLowerCase();

    const handleClick = () => {
        const updatedSelectedItems = { ...selectedItems };
        updatedSelectedItems[name] = item;
        setSelectedItems(updatedSelectedItems);
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
                    className={`cursor-pointer hover:font-bold text-white bg-black ${isSelected ? 'underline font-bold' : ''} rounded-lg text-sm px-2.5 py-2`}
                >
                    {item}
                </label>

            </div>
        </div>
    )
}

export default FilterButton