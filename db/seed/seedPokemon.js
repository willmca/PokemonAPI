const Pokemon = require("../models/Pokemon")
const PokemonData = require("../data/pokemon.json")

const Type = require("../models/Type")
const TypeData = require("../data/types.json")

const Generation = require("../models/Generation")
const GenerationData = require("../data/generation.json")

Generation.findOne({ "name": "generation-i" })
    .then(genOne => {

        Pokemon.find({})
            .then(pokemon => {
                pokemon.forEach(singlePokemon => {
                    const pokemonJson = PokemonData.find(pokemonJsonItem => pokemonJsonItem.name === singlePokemon.name)

                    const pokemonTypePromises = pokemonJson.type.map(type => {
                         return new Promise(resolve => {
                             Type.findOne({ name: type })
                                .then(typeDocument => {
                                    singlePokemon.type.push(typeDocument.id)
                                    resolve(singlePokemon)
                                })
                         })
                    })
                    Promise.all(pokemonTypePromises)
                        .then(() => {
                            singlePokemon.generation = genOne.id
                            singlePokemon.save()
                        })
                })
            })
    })


