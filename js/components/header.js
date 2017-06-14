'use strict';
const Header = () => {
    const header = $('<div class="center-align"></div>');
    const titulo = $('<h1>Pokédex</h1>');
    header.append(titulo);
    return header;
}