import React from 'react'
import FilterButton from '../FilterButton'

const Gender = ({selectedItems, setSelectedItems, setGender, setPageNumber}) => {

    const genders = ['Female', 'Male', 'Genderless', 'Unknown']

  
    return (
        <div>
            <div>
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" className="accordion" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                        <span>Gender</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                    {genders.map((item, index) => (
                        <FilterButton
                        key={index}
                        name="gender"
                        setPageNumber={setPageNumber}
                        task={setGender}
                        index={index}
                        item={item}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gender