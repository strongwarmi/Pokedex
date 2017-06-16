'use strict';

const filterByName = (pokemon,query) => {
    const listName = pokemon.pokemon_entries;
  return listName.filter((x) => {
   if (x.pokemon_species.name.indexOf(query)>-1){
       return x.pokemon_species;       
   }                    
 });
    //console.log(listName);
}


