import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { characters } from '../utils/characters';


export default function SearchBar() {

    const franfe = characters[0];
    const suarez = characters[1];

    return (
        <div>
            <p className="text-2xl text-center">¡Elige tu personaje!</p>

            <div className="flex py-4">
                <Button
                    label="Franfe"
                    character={franfe}

                />
                <Button
                    label="Suarez"
                    character={suarez}

                />
            </div>
        </div>
    );
}