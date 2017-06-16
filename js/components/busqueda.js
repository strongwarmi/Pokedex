'use strict';
const Search = (update) => {
    const container = $('<div class="container row"></div>');
    const icon = $('<i class="Small material-icons">search</i>');
    const input = $('<input id="search" type="search" class="validate" placeholder="Busca tu pokemon">');
    const btnOrdenar = $('<a class="waves-effect waves-light btn">A-Z</a>');
    const gridPokedex = $('<div class="row"></div>');
    

    container.append(icon);
    container.append(input);
    container.append(btnOrdenar);
    container.append(gridPokedex);
    //console.log(state.pokemon.pokemon_entries[0].entry_number);
    const inicio = filterByName(state.pokemon, "");
    Resultado(gridPokedex, inicio);

    input.on('keyup', () => {
        const pokemonFiltrado = filterByName(state.pokemon, input.val());
        console.log(pokemonFiltrado);
        Resultado(gridPokedex, pokemonFiltrado);
    });

    return container;

}

const cardPokemon = (e,update) => {
    console.log(e);
    console.log(state.pokemon.pokemon_entries[1].entry_number);
    const card = $('<div></div>');
    const lblNombre = $('<p>' + e.pokemon_species.name + '</p>');
    const img = $('<img src="http://serebii.net/art/th/' + e.entry_number+ '.png" />')
   // console.log(e.pokemon_species.name);
    card.append(img);
    card.append(lblNombre);
    return card;
    console.log(state.pokemon.pokemon_entries[0].entry_number);
    //
}

const Resultado = (gridPokedex, pokemonFiltrado) => {
    gridPokedex.empty();
    pokemonFiltrado.forEach((e) => {
        gridPokedex.append(cardPokemon(e, _ => (Resultado(gridPokedex, pokemonFiltrado))));
    });
    return gridPokedex;
}
