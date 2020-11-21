import React from 'react';
import Pokecard from './Pokecard';
import pokemon from './pokemon';
import './Pokedex.css';

const Pokedex = ({ pokemonList = pokemon }) => (
    <div class="Pokedex">
        {pokemonList.map(p => (
            <Pokecard key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
            />
        ))}
    </div>
);

export default Pokedex;