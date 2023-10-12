import React from 'react'
import FilterButton from '../FilterButton'

const Status = ({ selectedItem, handleSelect, setStatus, setPageNumber }) => {

    const status = ['Alive', 'Dead', 'Unknown']

    return (
        <div>
            <h2 id="accordion-collapse-heading-3">
                <button type="button" className="accordion" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                    <span>Status</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">

                {status.map((item, index) => (
                    <FilterButton
                        key={index}
                        name="status"
                        setPageNumber={setPageNumber}
                        task={setStatus}
                        index={index}
                        item={item}
                        selectedItem={selectedItem}
                        handleSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    )
}

export default Status