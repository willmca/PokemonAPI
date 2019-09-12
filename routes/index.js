const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/pokemon", require("./pokemon"));
router.use("/api/type", require("./type.js"));
router.use("api/generation", require("./generation"))

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;