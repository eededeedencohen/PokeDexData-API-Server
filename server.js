const express = require("express");
const app = express();
const port = 3000;
const pokemonRoutes = require("./routes/pokemonRoutes");
const pokedexRoutes = require("./routes/pokedexRoutes");

require("dotenv").config();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the pokemon routes
app.use("/pokemon", pokemonRoutes);
app.use("/pokedex", pokedexRoutes); // example: host:3000/pokedex/all, http://localhost:3000/pokedex/evolutions/charmander, http://localhost:3000/pokedex/attacks/charmander

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
