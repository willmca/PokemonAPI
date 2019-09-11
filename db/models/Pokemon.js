const mongoose = require("../connection")
const Schema = mongoose.Schema

const PokemonSchema = new Schema ({
    name:String,
    url:String,
    type: [String],
    /*Generation: {
       type: mongoose.Schema.Types.id,
       ref: "Generation"
    }
    */
})

const Pokemon = mongoose.model("Pokemon", PokemonSchema)

module.exports = Pokemon