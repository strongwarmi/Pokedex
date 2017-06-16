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
    const card = $('<div></div>');
    const lblNombre = $('<p>' + e + '</p>');
   // const img = $('<img src="http://serebii.net/art/th/' +state.pokemon.+ '.png" />')
   // console.log(e.pokemon_species.name);
   // card.append(img);
    card.append(lblNombre);
    return card;
    //
}

const Resultado = (gridPokedex, pokemonFiltrado) => {
    gridPokedex.empty();
    pokemonFiltrado.forEach((e) => {
        gridPokedex.append(cardPokemon(e, _ => (Resultado(gridPokedex, pokemonFiltrado))));
    });
    return gridPokedex;
}
