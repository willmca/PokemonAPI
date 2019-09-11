const mongoose = require("../connection")
const Schema = mongoose.Schema

const GenerationSchema = new Schema({
    id: Number
})

const Generation = mongoose.model("Generation", GenerationSchema)
module.exports = Generation