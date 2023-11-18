import React from 'react'
import Card from './Card'

const CardList = ({ results }) => {

    if (results) {
        return (
            <>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 md:gap-2 pt-4' >
                    {results.map((character) => (
                        <div className='py-2' key={character.id}>
                            <Card character={character} />
                        </div>
                    ))}
                </div>
            </>
        )

    } else {
        <p>Loading...</p>
    }
}

export default CardList