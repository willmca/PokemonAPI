const Pokemon = require("../db/models/Pokemon");

module.exports = {
    index: (req, res) => {
      Pokemon.find({}).then(pokemon => {
        res.json(pokemon);
      });
    },
    indexByName: (req,res) => {
      Pokemon.findOne({
        name: req.params.name
      }).then(pokemon =>{
      res.json(pokemon)
      })
    },
    indexByType: (req,res) => {
      Pokemon.find({
        type:req.params.type
      }).then(pokemon =>{
        res.json(pokemon)
      })
    },
    indexByNumber: (req,res) => {
      Pokemon.find({
        number:req.params.number
      }).then(pokemon => {
        res.json(pokemon)
      })
    },
    deleteByName: (req,res) => {
      Pokemon.deleteOne({
        name:req.params.name
      }).then(pokemon =>{
        res.json(pokemon)
      })
    },
    deleteByNumber: (req,res) => {
      Pokemon.deleteOne({
        number:req.params.number
      }).then(pokemon =>{
        res.json(pokemon)
      })
    },
    updateByName: (req,res) => {
      Pokemon.findOneAndUpdate({
        name:req.params.name
      }, req.body)
      .then(pokemon => res.json(pokemon))
    },
    updateByNumber: (req,res) => {
      Pokemon.findOneAndUpdate({
        number:req.params.number
      }, req.body)
      .then(pokemon => res.json(pokemon))
    },
    create: (req, res) => {
      const newPokemon = req.body;
      Pokemon.create(newPokemon).then(pokemon => res.json(pokemon));
    },
    }
   
  
    //TO DO. Make pokemon always display in order by number, fix postman returns for put
