const express = require("express");
const PokemonRouter = express.Router();
const PokemonController = require("./../controllers/pokemon")

PokemonRouter.get("/", PokemonController.index)
PokemonRouter.get("/name/:name", PokemonController.indexByName)
PokemonRouter.get("/type/:type", PokemonController.indexByType)
PokemonRouter.delete("/:name", PokemonController.deleteByName)

module.exports = PokemonRouter;