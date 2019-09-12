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
}
}