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
    deleteByName: (req,res) => {
      Pokemon.deleteOne({
        name:req.params.name
      }).then(pokemon =>{
        res.json(pokemon)
      })
    }
}