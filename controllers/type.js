const Type = require("../db/models/Type");

module.exports = {
    index: (req, res) => {
      Type.find({}).then(type => {
        res.json(type);
      });
    },
    indexByName: (req,res) => {
      Type.findOne({
        name: req.params.name
      }).then(type =>{
      res.json(type)
      })
},
    delete: (req,res) => {
      Type.deleteOne({
        name: req.params.name
      }).then(type =>{
        res.json(type)
      })
    },
    updateByName: (req,res) => {
      Type.findOneAndUpdate({
        name:req.params.name
      }, req.body)
      .then(type => res.json(type))
},
    create: (req, res) => {
      Pokemon.create(req.body)
      .then(pokemon => {
      res.json(pokemon)
    })
},

}