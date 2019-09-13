const Generation = require("../db/models/Generation");

module.exports = {
    index: (req, res) => {
      Generation.find({}).then(generation => {
        res.json(generation);
      });
    },
    indexByName: (req,res) => {
      Generation.find({name: req.params.name})
      .then(generation => {
        res.json(generation)
      })
    }
}