'use strict';
const Header = () => {
    const header = $('<div class="center-align"></div>');
    const titulo = $('<h3 class="red-text text-darken-2">Pokédex</h3>');
    header.append(titulo);
    return header;
}