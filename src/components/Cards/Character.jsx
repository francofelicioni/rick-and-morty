import React from 'react'

export const Character = ({ character }) => {

    let { name, species, status, image, location, origin } = character;
    const statusColor = {
        alive: 'bg-alive',
        dead: 'bg-dead',
        unknown: 'bg-unknown',
    }[character.status.toLowerCase()];


    return (
        <div className='relative w-full h-full flex flex-col lg:flex-row justify-between items-center bg-grey-background rounded-lg text-center rounded-lg mx-auto'>
            <img className='h-[250px] object-cover lg:h-full w-full lg:max-w-[200px] rounded-t-lg lg:rounded-l-lg' src={image} alt={name} />

            <div className='flex flex-col w-full h-full justify-center gap-4 items-start p-5'>
                <div className='bg-light-salmon px-2 py-1 rounded-r-lg rounded-sm absolute top-0 right-0  flex items-center gap-2'>
                    <p className='text-sm text-black'>{species}</p>
                    <span className='text-black'>-</span>
                    <p className='text-sm text-black'>{status}</p>
                    <div className={`rounded-full w-2 h-2 border border-white ${statusColor}`}></div>
                </div>
                <h2 className='text-3xl lg:text-2xl text-white font-bold py-1'>{name}</h2>

                <div className='flex justify-between text-left items-center gap-4'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex gap-x-2'>
                            <p className='text-blue-200 text-base lg:   text-sm font-bold'>Location:</p>
                            <p className='text-pink text-base lg:text-xs text-left'>{origin.name === 'Earth (Replacement Dimension)' ? 'Earth (New Dimension)': origin.name }</p>
                        </div>
                        <div className="flex gap-x-2">
                            <p className='text-blue-200 font-bold text-base lg:text-sm'> First seen in:</p>
                            <p className='text-pink text-base lg:text-xs text-left'>{origin.name === 'Earth (Replacement Dimension)' ? 'Earth (New Dimension)': origin.name }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
