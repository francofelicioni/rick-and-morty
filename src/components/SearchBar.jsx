import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { characters } from '../utils/characters';

export default function SearchBar() {

    const {franfe} = characters.alias;

    console.log(franfe)

    const [activeCharacter, setActiveCharacter] = useState(null);

    const handleCharacterClick = (character) => {
        setActiveCharacter(character);
    };

    const handleBackButtonClick = () => {
        setActiveCharacter(null);
    };

    return (
        <div>
            <p className="text-2xl text-center">¡Elige tu personaje!</p>

            <div className="flex py-4">
                <Button
                    label="Franfe"
                    character={characters[0]}
                    onClick={() => handleCharacterClick(characters[0])}
                />
                <Button
                    label="Suarez"
                    character={characters[1]}
                    onClick={() => handleCharacterClick(characters[1])}
                />
            </div>

            {activeCharacter && (
                <Card character={activeCharacter} onBackButtonClick={handleBackButtonClick} />
            )}
        </div>
    );
}
