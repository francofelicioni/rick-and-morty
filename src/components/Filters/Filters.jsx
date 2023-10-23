import React, { useEffect, useState } from 'react'
import { Accordion } from 'flowbite';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({ setGender, setSpecies, setStatus, setPageNumber }) => {

    const [accordionItems, setAccordionItems] = useState([])
    const [selectedItems, setSelectedItems] = useState(
        {
            gender: '',
            species: '',
            status: '',
        }
    );

    const handleClick = () => {
        setGender('');
        setSpecies('');
        setStatus('');
        setSelectedItems(
            {
                gender: '',
                species: '',
                status: '',
            }
        )
    }

    useEffect(() => {
        setAccordionItems(
            {
                id: 'accordion-collapse-heading-1',
                triggerEl: document.querySelector('#accordion-collapse-heading-1'),
                targetEl: document.querySelector('#accordion-collapse-body-1'),
                active: false
            },
            {
                id: 'accordion-collapse-heading-2',
                triggerEl: document.querySelector('#accordion-collapse-heading-2'),
                targetEl: document.querySelector('#accordion-collapse-body-2'),
                active: false
            },
            {
                id: 'accordion-collapse-heading-3',
                triggerEl: document.querySelector('#accordion-collapse-heading-3'),
                targetEl: document.querySelector('#accordion-collapse-body-3'),
                active: false
            }
        )
    }, [])

    const options = {
        alwaysOpen: true,
        activeClasses: 'bg-black dark:bg-gray-800 text-gray-900 dark:text-white',
        inactiveClasses: 'text-gray-500 dark:text-gray-400',
    };

    const accordion = new Accordion(accordionItems, options);

    return (
        <div className='flex flex-col p-5'>

            <span className='font-bold text-center lg:text-xl'>FILTERS</span>
            <span onClick={handleClick} className='text-center lg:text-md underline text-white mt-2 cursor-pointer'>Clear</span>

            <div className='bg-yellow dark:bg-black mt-4 rounded-lg dark:text-unknown' id="accordion-collapse" data-accordion="collapse">
                <Gender selectedItems={selectedItems} setSelectedItems={setSelectedItems} setGender={setGender} setPageNumber={setPageNumber} />
                <Species selectedItems={selectedItems} setSelectedItems={setSelectedItems} setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Status selectedItems={selectedItems} setSelectedItems={setSelectedItems} setStatus={setStatus} setPageNumber={setPageNumber} />
            </div>


        </div>
    )
}

export default Filters