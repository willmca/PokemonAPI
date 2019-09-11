const Pokemon = require ("../models/Pokemon")
const PokemonData = require("../data/pokemon.json")

Pokemon.find({}).deleteMany({}).then(() => {
    let newPokemonData = {};
    PokemonData.map(element => {
        newPokemonData.name=element.name;
        newPokemonData.url=element.url;
        newPokemonData.type=element.type;
  
        Pokemon.create(newPokemonData)
        .then( (pokemon) => {
            pokemon.save()
            console.log(pokemon)
        }
        );
    })
});
