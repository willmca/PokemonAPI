const express = require("express");
const TypeRouter = express.Router();
const TypeController = require("./../controllers/type")

TypeRouter.get("/", TypeController.index)

module.exports = TypeRouter;