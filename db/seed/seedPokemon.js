const Pokemon = require ("../models/Pokemon")
const PokemonData = require("../data/pokemon.json")

const Type = require ("../models/Type")
const TypeData = require ("../data/types.json")

const Generation = require ("../models/Generation")
const GenerationData = require("../data/generation.json")

Generation.findOne({ "name": "generation-i"} )
    .then(genOne => {
        // console.log(genOne)
        // const PokemonDataWithGeneration = PokemonData.map(pokemonJson => {
        //     pokemonJson.generatation = genOne.id
        //     return pokemonJson
        // })

        Pokemon.find({})
            .then(pokemon => {
                pokemon.forEach(singlePokemon => {
                    singlePokemon.generation = genOne.id
                    singlePokemon.save()
                })
            })

        // console.log(PokemonDataWithGeneration[0])

        // Pokemon.deleteMany({})
        // .then(() => {
        //     Pokemon.create(PokemonDataWithGeneration[0])
        //     .then( (pokemon) => {
        //     console.log(pokemon)
        //     }
        // )
    })

// })

