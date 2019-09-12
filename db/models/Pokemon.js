const mongoose = require("../connection")
const Generation = require("../models/Generation")
const Schema = mongoose.Schema


const PokemonSchema = new Schema ({
    name:String,
    url:String,
    type: [String],
    number: Number,
    generation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Generation"
    }
    
})

const Pokemon = mongoose.model("Pokemon", PokemonSchema)

module.exports = Pokemon