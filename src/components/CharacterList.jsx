import React, { useEffect, useState } from 'react'
import { Character } from './Cards/Character'

export const CharacterList = ({ characters }) => {


    if (characters) {
        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 md:gap-2 pt-4' >
                    {characters.map((character) => (
                        <div className='py-2' key={character.id}>
                            <Character character={character} />
                        </div>
                    ))}
                </div>
            </>
        )

    } else {
        <p>Loading...</p>
    }
}