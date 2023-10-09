import React, { useEffect, useState } from 'react'
import { Character } from './Cards/Character'

export const CharacterList = ({ characters }) => {


    if (characters) {
        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4'>
                    {characters.map((character, index) => (
                        <div className="p-5" key={character.id}>
                            <Character character={character} />
                        </div>
                    ))}
                </div>

                <p></p>
            </>
        )

    } else {
        <p>Loading...</p>
    }
}