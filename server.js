const express = require("express");
const app = express();
const port = 3000;
const pokemonRoutes = require("./routes/pokemonRoutes");
const caughtPokemonRoutes = require("./routes/caughtPokemonRoutes");

require("dotenv").config();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the pokemon routes
app.use("/pokemon", pokemonRoutes);
app.use("/caught_pokemon", caughtPokemonRoutes); 

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
