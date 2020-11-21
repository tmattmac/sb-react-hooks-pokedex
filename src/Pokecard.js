import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, exp }) => {
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className='Pokecard'>
            <span className='Pokecard-name'>Pikachu</span>
            <img src={sprite} alt={`${name} sprite`} />
            <span>Type: {type}</span>
            <span>Base EXP: {exp}</span>
        </div>
    );
};

export default Pokecard;