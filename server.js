const express = require("express");
const app = express();
const port = 3000;
const pokemonRoutes = require("./routes/pokemonRoutes");
const seenPokemonRoutes = require("./routes/seenPokemonRoutes");
const myPokemonRoutes = require("./routes/myPokemonRoutes");
const caughtPokemonRoutes = require("./routes/caughtPokemonRoutes");
const bagRoutes = require("./routes/bagRoutes");
const pokedexRoutes = require("./routes/pokedexRoutes");
const attackRoutes = require("./routes/attackRoutes");

require("dotenv").config();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the pokemon routes
app.use("/pokemon", pokemonRoutes);
app.use("/seenPokemon", seenPokemonRoutes);
app.use("/myPokemon", myPokemonRoutes);
app.use("/caught_pokemon", caughtPokemonRoutes);
app.use("/bag", bagRoutes); 
app.use("/pokedex", pokedexRoutes);
app.use("/attack", attackRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
