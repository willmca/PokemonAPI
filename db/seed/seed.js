const Pokemon = require("../models/Pokemon")
const PokemonData = require("../data/pokemon.json")

const Type = require("../models/Type")
const TypeData = require("../data/types.json")

const Generation = require("../models/Generation")
const GenerationData = require("../data/generation.json")

const Instructions = require("../models/instructions")
const InstructionsData = require("../data/routes.json")

const pokemonDataClean = PokemonData.map(pokemonDataItem => {
    const cleanPokemonData = {}
    cleanPokemonData.name = pokemonDataItem.name
    cleanPokemonData.url = pokemonDataItem.url
    cleanPokemonData.number = pokemonDataItem.number

    return cleanPokemonData
})

Pokemon.find({}).deleteMany({}).then(() => {
    Pokemon.create(pokemonDataClean)
        .then((pokemon) =>
            console.log(pokemon)
        )
}
)

Type.find({}).deleteMany({}).then(() => {
    Type.create(TypeData)
        .then((type) =>
            console.log(type)
        )
}
)

Generation.find({}).deleteMany({}).then(() => {
    Generation.create(GenerationData)
        .then((generation) =>
            console.log(generation)
        )
}
)


