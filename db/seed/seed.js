const Pokemon = require ("../models/Pokemon")
const PokemonData = require("../data/pokemon.json")

const Type = require ("../models/Type")
const TypeData = require ("../data/types.json")

const Generation = require ("../models/Generation")
const GenerationData = require("../data/generation.json")

/*Pokemon.find({}).deleteMany({}).then(() => {
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
*/
Pokemon.find({}).deleteMany({}).then(() => {
    Pokemon.create(PokemonData)
    .then( (pokemon) => 
    console.log(pokemon)
    )}
)

Type.find({}).deleteMany({}).then(() => {
    Type.create(TypeData)
    .then( (type) => 
    console.log(type)
    )}
)

Generation.find({}).deleteMany({}).then(() => {
    Generation.create(GenerationData)
    .then( (generation) => 
    console.log(generation)
    )}
)


