import React from 'react'
import FilterButton from '../FilterButton'

const Species = ({selectedItems, setSelectedItems, setSpecies, setPageNumber}) => {

    let species = ['Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet']
    return (
        <div>

            <h2 id="accordion-collapse-heading-2">
                <button type="button" className="accordion" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                    <span>Species</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">

                {species.map((item, index) => (
                    <FilterButton
                    key={index}
                    name="species"
                    setPageNumber={setPageNumber}
                    task={setSpecies}
                    index={index}
                    item={item}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                />
                ))}
            </div>
        </div>
    )
}

export default Species