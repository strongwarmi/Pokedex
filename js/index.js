'use strict';
const render = (root) => {
    root.empty();
    // Append components    
    root.append(Header());
    root.append(Search());
};

const state = {
    pokemon: null,
    selectedPokemon: null
};

$(_ => {

    getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

        if (err) {
            return alert(err.message);
        }

        state.pokemon = json;

        const root = $('.root');
        render(root);
    });

});
