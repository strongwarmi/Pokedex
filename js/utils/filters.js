'use strict';

const filterByName = (pokemon,query) => {
    const listName = pokemon.pokemon_entries.map((e)=>{
        return e.pokemon_species.name;
    });
  return listName.filter((name) => {
   if (name.indexOf(query)>-1){
       //console.log(name.indexOf(query));
       return name;       
   }                    
 });
    //console.log(listName);
}


