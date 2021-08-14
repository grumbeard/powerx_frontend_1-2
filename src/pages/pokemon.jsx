import * as React from 'react';
import { PokemonCard } from '../components/pokemon-card'

function getPokemons() {
    return fetch("https://pokemon-json.herokuapp.com/api/pokedex?_limit=12")
    .then(res => res.json());
}

export function Pokemon() {
    const languages = ['english', 'japanese', 'chinese'];
    const [pokemons, setPokemons] = React.useState(undefined);
    const [language, setLanguage] = React.useState(languages[0]);
    getPokemons().then(data => setPokemons(data));

    function handlePokemonClick() {
        const curr_idx = languages.findIndex(lang => lang === language);
        const next_idx = (curr_idx < languages.length - 1) ? curr_idx + 1 : 0;
        setLanguage(languages[next_idx]);
    }

    return (
        <div className="max-w-4xl mx-auto px-3 py-12 space-y-6">
          <div>
            <h1 className="text-6xl mb-4 font-extrabold">Pokemon</h1>
            <p>These are the pokemons that we are taking care of</p>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="pokemon-list">
              { pokemons && pokemons.map(pokemon => (
                  <PokemonCard
                    key={pokemon.id}
                    name={pokemon.name[language]}
                    imageUrl={pokemon.thumbnail}
                    desc={pokemon.description}
                    onClick={handlePokemonClick}
                  />
                )) }
          </ul>
        </div>
    );
}