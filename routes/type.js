const express = require("express");
const TypeRouter = express.Router();
const TypeController = require("./../controllers/type")

TypeRouter.get("/", TypeController.index)
TypeRouter.get("/:name", TypeController.indexByName)
TypeRouter.delete("/:name", TypeController.delete)
TypeRouter.put("/:name", TypeController.updateByName)
TypeRouter.post("/", TypeController.create)



module.exports = TypeRouter;