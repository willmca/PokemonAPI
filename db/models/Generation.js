const mongoose = require("../connection")
const Schema = mongoose.Schema

const GenerationSchema = new Schema({
    name: String,
    url: String

})


const Generation = mongoose.model("Generation", GenerationSchema)
module.exports = Generation