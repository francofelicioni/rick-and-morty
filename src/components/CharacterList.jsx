import React, { useEffect, useState } from 'react'
import { Character } from './Cards/Character'

export const CharacterList = ({ characters }) => {


    if (characters) {
        return (
            <>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
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