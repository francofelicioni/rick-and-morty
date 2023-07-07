import React from 'react';

export default function Button({ character }) {

    return (
        <button className="py-3 px-4 my-2 w-[200px] border border-black bg-black text-white font-bold text-2xl mx-auto cursor-pointer rounded-lg hover:bg-white hover:text-black">
            {character.alias}
        </button>
    );
}