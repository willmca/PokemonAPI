const express = require("express")
const app = express();
const parser = require("body-parser")
const PokemonRouter = require("./routes/pokemon");
const ApplicationRouter = require("./routes/application")
const TypeRouter = require("./routes/type")
const GenRouter = require("./routes/generation")

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use("/", ApplicationRouter)
app.use("/api/pokemon", PokemonRouter)
app.use("/api/type", TypeRouter)
app.use("/api/generation", GenRouter)

app.set("port", process.env.PORT || 300);
app.listen(app.get("port"), () => 
{console.log(`PORT: ${app.get("port")}`)});