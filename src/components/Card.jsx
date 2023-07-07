import React from 'react'
import Button from './Button'


const Card = ({character}) => {
    return (
        <>
            <div className="my-4 flex gap-4 flex-col px-auto border border-black rounded-lg bg-gray-200">
                <div>
                    <img className="rounded-lg p-2 mx-auto" src="https://placehold.co/340x331" alt="Imgaen del personaje" />
                    <div>
                        <p className="text-sm text-center">Nombre:</p>
                        <p className="text-sm text-center"> {character.name} </p>

                    </div>
                </div>
                <Button label="Ver más"></Button>
            </div>
        </>
    )
}


export default Card