import React, { useState } from 'react';
import Card from './Card';

export default function Button({ character }) {

    const [characterName, setCharacterName] = useState('');
    const alias = character[2];

    const handleCharacterClick = () => {
        if (alias === 'Franfe') {
            setCharacterName('franfe')
            console.log('Franfe');
        } else if (alias === 'Suarez') {
            console.log('Suarez');
            setCharacterName('suarez')
        }
    };

    return (
        <>
            <button
                className="py-3 px-4 my-2 w-[200px] border border-black bg-black text-white font-bold text-2xl mx-auto cursor-pointer rounded-lg hover:bg-white hover:text-black"
                onClick={handleCharacterClick}
            >
                {alias}
            </button>
        </>
    );
}
