'use strict';
const Search = (update) => {
    const section = $('<section class="section"></section>');
    const container = $('<div class="container"></div>');
    const search = $('<div id="search" class="row"></div>');
    const icon = $('<div class="col s1"><i class="Small material-icons right">search</i></div>');
    const divInput = $('<div class="col s8"></div>');
    const input = $('<input class="validate" type="search" placeholder="Busca tu pokemon">');
    const btnOrdenar = $('<div class="col s3"><a class="waves-effect waves-light btn right">A-Z</a></div>');
    const gridPokedex = $('<div class="row"></div>');

    divInput.append(input);
    search.append(icon);
    search.append(divInput);
    search.append(btnOrdenar);
    container.append(search);
    container.append(gridPokedex);
    section.append(container);
    //console.log(state.pokemon.pokemon_entries[0].entry_number);
    const inicio = filterByName(state.pokemon, "");
    Resultado(gridPokedex, inicio);

    input.on('keyup', () => {
        const pokemonFiltrado = filterByName(state.pokemon, input.val());
        //console.log(pokemonFiltrado);
        Resultado(gridPokedex, pokemonFiltrado);

    });

    return section;

}

const cardPokemon = (e,update) => {
    //console.log(e);
    //console.log(state.pokemon.pokemon_entries[1].entry_number);
    const name = e.pokemon_species.name;
    const card = $('<div class="card-panel small grey lighten-3 center-align"></div>');
    const img = $('<img class="pokemon" src="http://serebii.net/art/th/' + e.entry_number+ '.png" />');
    const divControls = $('<div class="controles"></div>');
    //const fondo = $('<div class="fondo"></div>');
    const pokeball = $('<img src="assets/icon/pokeball_gray.png">');
    $(pokeball).css("left","10%");
    const heart = $('<img src="assets/icon/valentines-heart.png">');
    $(heart).css("left","45%");
    const data = $('<img src="assets/icon/data.png">');
    $(data).css("right","10%");
    const lblNombre = $('<p>' + name.charAt(0).toUpperCase() + name.slice(1) + '</p>');

   // console.log(e.pokemon_species.name);
    card.append(img);
    //divControls.append(fondo);
    divControls.append(pokeball);
    divControls.append(heart);
    divControls.append(data);
    divControls.append(lblNombre);
    card.append(divControls);
    return card;
    //console.log(state.pokemon.pokemon_entries[0].entry_number);
    //
}

const Resultado = (gridPokedex, pokemonFiltrado) => {
    gridPokedex.empty();
    pokemonFiltrado.forEach((e) => {
        gridPokedex.append(cardPokemon(e, _ => (Resultado(gridPokedex, pokemonFiltrado))));
    });
    return gridPokedex;
}
