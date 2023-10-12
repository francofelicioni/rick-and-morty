import React, { useEffect, useState } from 'react'
import { Accordion } from 'flowbite';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = () => {

    const [accordionItems, setAccordionItems] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (itemId) => {
        setSelectedItem(itemId);
    };

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
        onOpen: (item) => {
            console.log('accordion item has been shown');
            console.log(item);
        },
        onClose: (item) => {
            console.log('accordion item has been hidden');
            console.log(item);
        },
        onToggle: (item) => {
            console.log('accordion item has been toggled');
            console.log(item);
        },
    };

    const accordion = new Accordion(accordionItems, options);

    return (
        <div className='flex flex-col w-[20%] p-5'>

            <span className='font-bold text-center lg:text-xl'>FILTERS</span>
            <span className='text-center lg:text-md underline text-white mt-2 cursor-pointer'>Clear</span>

            <div className='bg-black rounded-lg text-unknown' id="accordion-collapse" data-accordion="collapse">
                <Gender selectedItem={selectedItem} handleSelect={handleSelect} />
                {/* <Species />
                <Status /> */}
            </div>


        </div>
    )
}

export default Filters