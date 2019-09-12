const express = require("express");
const PokemonRouter = express.Router();
const PokemonController = require("./../controllers/pokemon")

PokemonRouter.get("/", PokemonController.index)
PokemonRouter.get("/name/:name", PokemonController.indexByName)
PokemonRouter.get("/type/:type", PokemonController.indexByType)
PokemonRouter.get("/number/:number", PokemonController.indexByNumber)
PokemonRouter.delete("/name/:name", PokemonController.deleteByName)
PokemonRouter.delete("/number/:number", PokemonController.deleteByNumber)
PokemonRouter.put("/name/:name", PokemonController.updateByName)
PokemonRouter.put("/number/:number", PokemonController.updateByNumber)
PokemonRouter.post("/", PokemonController.create)




module.exports = PokemonRouter;