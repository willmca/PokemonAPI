const Generation = require("../db/models/Generation");

module.exports = {
    index: (req, res) => {
      Generation.find({}).then(generation => {
        res.json(generation);
      });
    }
}