const express = require("express");
const GenerationRouter = express.Router();
const GenerationController = require("./../controllers/generation")

GenerationRouter.get("/", GenerationController.index)

module.exports = GenerationRouter;